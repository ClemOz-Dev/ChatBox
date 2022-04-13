import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from 'src/store';

import Chat from 'src/containers/Chat';

const rootReactElement = (
  <Provider store={store}>
    <Chat />
  </Provider>
);

const target = document.getElementById('root');

render(rootReactElement, target);
