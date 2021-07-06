import { connect } from 'react-redux';

import ChatList from 'src/components/ChatList';

import { loadConversations, clearConv } from 'src/actions/chat';

const mapStateToProps = (state) => (
  {
    conversations: state.chat.conversations,
    userId: state.auth.id,
  }
);


const mapDispatchToProps = (dispatch) => ({
  loadConversations: () => {
    const action = loadConversations();
    dispatch(action);
  },

  clearConv: () => {
    const action = clearConv();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);
