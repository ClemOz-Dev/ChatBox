import { connect } from 'react-redux';

import App from 'src/components/App';
import { loadUserWithToken } from 'src/actions/auth';

const mapStateToProps = (state) => (
  {
    isConnected: state.auth.isConnected,

  }
);


const mapDispatchToProps = (dispatch) => ({
  loadUserWithToken: (id, token) => {
    const action = loadUserWithToken(id, token);
    dispatch(action);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
