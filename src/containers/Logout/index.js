import { connect } from 'react-redux';

import Logout from 'src/components/Logout';

import { disconnectUser } from 'src/actions/auth';
import { clearConv } from 'src/actions/chat';

const mapStateToProps = (state) => (
  {
    // todo
  }
);


const mapDispatchToProps = (dispatch) => ({
  disconnectUser: () => {
    const action = disconnectUser();
    dispatch(action);
  },

  clearConv: () => {
    const action = clearConv();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
