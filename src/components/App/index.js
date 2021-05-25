// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// == Import
import './styles.scss';
import ChatList from 'src/components/ChatList';
import Conversation from 'src/components/Conversation';
import Footer from 'src/components/Footer';
import Settings from 'src/containers/Settings';
import SettingsRegistration from '../SettingsRegistration';

// == Composant
const App = () => (
  <div className="app">
    <Switch>
      <Route exact path="/">
        <Settings />
      </Route>
      <Route exact path="/inscription">
        <SettingsRegistration />
      </Route>
      <Route path="/conversations">
        <ChatList />
      </Route>
      <Route path="/conversation/:id">
        <Conversation />
      </Route>
    </Switch>
    <Footer />
  </div>
);

// == Export
export default App;
