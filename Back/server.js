/* eslint-disable prefer-destructuring */

const express = require('express');
const bodyParser = require('body-parser');
const Server = require('http').Server;
const socket = require('socket.io');


const app = express();
const server = Server(app);
const io = socket(server);
const port = 3001;

const db = {
  users: {
    'admin@admin.io': {
      password: 'admin',
      username: 'Admin',
      color: '#c23616',
    },
    'test@test.io': {
      password: 'test',
      username: 'John Doe',
      color: '#009432',
    },
    'test2@test2.io': {
      password: 'test2',
      username: 'Jane Doe',
      color: '#f0f',
    }
  }
};

app.use(bodyParser.json());
app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*');
  // response.header('Access-Control-Allow-Credentials', true);
  response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  response.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});


app.get('/', (request, response) => {
  response.send(`
    <div style="margin: 5em auto; width: 400px; line-height: 1.5">
      <h1 style="text-align: center">Hello!</h1>
      <p>Si tu vois ce message, c'est que ton serveur est bien lancé !</p>
      <div>Désormais, tu dois venir utiliser l'API</div>
      <ul style="display: inline-block; margin-top: .2em">
        <li><code>POST http://localhost:${port}/login</code></li>
        <li><code>POST http://localhost:${port}/forgot</code></li>
        <li><code>GET http://localhost:${port}/theme/{email}</code></li>
      </ul>
    </div>
  `);
});


app.post('/login', (request, response) => {
  console.log('>> POST /login', request.body);

  const { email, password } = request.body;

  let username;
  if (db.users[email] && db.users[email].password === password) {
    username = db.users[email].username;
  }

  if (username) {
    console.log('<< 200 OK', username);
    response.json({
      pseudo: username,
    });
  }
  else {
    console.log('<< 401 UNAUTHORIZED');
    response.status(401).end();
  }
});

app.post('/forgot', (request, response) => {
  const { email } = request.body;
  if (db.users[email]) {
    response.json({
      pseudo: db.users[email].username
    });
  }
  else {
    response.status(400).end();
  }
});


/*
 * Socket.io
 */
let id = 0;
io.on('connection', (ws) => {
  console.log('>> socket.io - connected');
  ws.on('send_message', (message) => {
    // eslint-disable-next-line no-plusplus
    message.id = ++id;
    io.emit('send_message', message);
  });
});

/*
 * Theme json
 */
app.get('/theme/:email', (request, response) => {
  const email = request.params.email;
  if (!email) {
    console.log('<< 400 BAD_REQUEST');
    response.status(400).end();
  }

  let color;
  if (db.users[email] && db.users[email].color) {
    color = db.users[email].color;
  }

  if (color) {
    console.log('<< 200 OK', email, color);
    response.json({
      color
    });
  }
  else {
    console.log('<< 401 UNAUTHORIZED');
    response.status(401).end();
  }
});

server.listen(port, () => {
  console.log(`listening on *:${port}`);
});
