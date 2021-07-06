import axios from 'axios';

import {
  LOAD_CONVERSATIONS,
  saveConversations,
  LOAD_MESSAGES,
  loadMessages,
  saveMessages,
  SEND_MESSAGE,
  CREATE_CONV,
  setConv,
  messageSent,
}
  from 'src/actions/chat';

const chatMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
    case LOAD_CONVERSATIONS: {
      const userId = state.auth.id;
      axios.get(`http://localhost:3000/conversations/${userId}`, {
        id: state.auth.id,
      })
        .then((response) => {
          console.log("trouvées : ", response.data);
          store.dispatch(saveConversations(response.data));
        })
        .catch((error) => {
          console.log(error.response);
        });
      next(action);
      break;
    }

    case LOAD_MESSAGES: {
      axios.get(`http://localhost:3000/conversation/${action.id.id}`)
        .then((response) => {
          console.log('trouvées : ', response.data);
          store.dispatch(saveMessages(response.data));
        })
        .catch((error) => {
          console.log(error.response);
        });
      next(action);
      break;
    }

    case CREATE_CONV: {
      // console.log(action.interlocutorId.id, state.auth.id);
      axios.post('http://localhost:3000/conversation/', {
        interlocutorId: action.interlocutorId.id,
        myId: state.auth.id,
      })
        .then((response) => {
          console.log('conversation Id trouvée : ', response.data);
          const currentInterlocutor = [response.data.user1,
          response.data.user2].find((item) => item !== state.auth.id);
          store.dispatch(setConv(currentInterlocutor, response.data.id));
          store.dispatch(loadMessages(response.data));
        })
        .catch((error) => {
          console.log(error.response);
        });
      next(action);
      break;
    }

    case SEND_MESSAGE: {
      const newMessage = {
        from_id: state.auth.id,
        to_id: state.chat.currentInterlocutor,
        id: state.chat.currentConv,
        content: state.chat.messageInputValue,
        fromNickname: state.auth.nickname,
      };
      axios.post('http://localhost:3000/new-mail', {
        fromId: state.auth.id,
        toId: state.chat.currentInterlocutor,
        conversationId: state.chat.currentConv,
        content: state.chat.messageInputValue,
      })
        .then((response) => {
          console.log(response);
          store.dispatch(messageSent(newMessage));
        })
        .catch((error) => {
          console.log(error.response.data.message);
        });
      next(action);
      break;
    }

    default:
      next(action);
  }
};

// Export Middleware.
export default chatMiddleware;
