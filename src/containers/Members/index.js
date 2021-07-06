import { connect } from 'react-redux';

import Members from 'src/components/Members';
import { loadMembers, setInputValue, submitFilter } from 'src/actions/user';
import { clearConv } from 'src/actions/chat';

const mapStateToProps = (state) => (
  {
    members: state.user.members,
    currentId: state.auth.id,
    currentNickname: state.auth.nickname,
  }
);


const mapDispatchToProps = (dispatch) => ({
  loadMembers: () => {
    const action = loadMembers();
    dispatch(action);
  },
  setInputValue: (value) => {
    const action = setInputValue(value);
    dispatch(action);
  },
  submitFilter: () => {
    const action = submitFilter();
    dispatch(action);
  },
  clearConv: () => {
    const action = clearConv();
    dispatch(action);
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(Members);
