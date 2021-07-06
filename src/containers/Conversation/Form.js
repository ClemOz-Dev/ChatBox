import { connect } from 'react-redux';

import Form from 'src/components/Conversation/Form';

import { setMessageInputValue, sendMessage } from 'src/actions/chat';

const mapStateToProps = (state) => (
  {
    messageInputValue: state.chat.messageInputValue,
  }
);

const mapDispatchToProps = (dispatch) => ({
  setMessageInputValue: (value) => {
    const action = setMessageInputValue(value);
    dispatch(action);
  },
  sendMessage: () => {
    const action = sendMessage();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
