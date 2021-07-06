import { connect } from 'react-redux';

import Conversation from 'src/components/Conversation';

import { loadMessages, createConv } from 'src/actions/chat';

const mapStateToProps = (state) => (
  {
    messages: state.chat.messages,
    currentId: state.auth.id,
  }
);


const mapDispatchToProps = (dispatch) => ({
  loadMessages: (id) => {
    const action = loadMessages(id);
    dispatch(action);
  },

  createConv: (id) => {
    const action = createConv(id);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Conversation);
