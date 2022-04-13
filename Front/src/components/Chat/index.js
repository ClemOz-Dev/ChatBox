import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Messages from 'src/containers/Messages';
import Form from 'src/containers/Form';
import Settings from 'src/containers/Settings';

import './styles.scss';

const Chat = ({ initWebsocket, isAuthentified }) => {
  console.log('rendu de Chat');

  useEffect(() => {
    initWebsocket();
  }, []);

  return (
    <div className="chat">
      <Messages />
      {isAuthentified && <Form />}
      <Settings />
    </div>
  );
};

Chat.propTypes = {
  initWebsocket: PropTypes.func.isRequired,
  isAuthentified: PropTypes.bool.isRequired,
};

export default Chat;
