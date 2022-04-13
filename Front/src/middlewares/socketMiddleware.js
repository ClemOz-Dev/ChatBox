import {
  CONNECT_WEBSOCKET,
  CONNECT_USER,
  SEND_MESSAGE,
  addMessage,
} from 'src/actions/chat';

const serverUrl = 'http://localhost:3001';

let socket;

const socketMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CONNECT_WEBSOCKET:
      socket = window.io(serverUrl);
      console.log('Initialisation de la connexion au websocket');
      next(action);
      break;
   
    case CONNECT_USER:
      socket.on('send_message', (message) => {     
        const actionAdd = addMessage(message);
        store.dispatch(actionAdd);
      });
      next(action);
      break;

    case SEND_MESSAGE: {
      const { inputMessage, nickname } = store.getState();
      const newMessage = {
        nickname: nickname,
        content: inputMessage,
      };
      socket.emit('send_message', newMessage);
      next(action);
      break;
    }

    default:
      next(action);
  }
};

export default socketMiddleware;
