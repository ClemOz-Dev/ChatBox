// == Import npm
import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// == Import
import './styles.scss';
import ChatList from 'src/containers/ChatList';
import Conversation from 'src/containers/Conversation';
import Footer from 'src/containers/Footer';
import Settings from 'src/containers/Settings';
import SettingsRegistration from 'src/containers/SettingsRegistration';
import Logout from 'src/containers/Logout';
import Members from 'src/containers/Members';
import Err404 from 'src/components/Err404';

// == Composant
const App = ({ isConnected, loadUserWithToken }) => {
  useEffect(() => {
    if (window.localStorage.token) {
      loadUserWithToken(window.localStorage.id, window.localStorage.token);
    };
  }, []);

  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          {isConnected ? <Redirect to="/membres" /> : <Settings />}
        </Route>
        <Route path="/inscription">
          <SettingsRegistration />
        </Route>
        <Route path="/membres">
          <Members />
        </Route>
        <Route path="/conversations">
          {!isConnected ? <Redirect to="/" /> : <ChatList />}
        </Route>
        <Route path="/conversation/:id">
          {!isConnected ? <Redirect to="/" /> : <Conversation />}
        </Route>
        <Route path="/deconnexion">
          <Logout />
        </Route>
        <Route path="*">
          <Err404 />
        </Route>
      </Switch>
      <Footer />
    </div>
  )
};

// == Export
export default App;
