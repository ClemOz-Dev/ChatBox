import { connect } from 'react-redux';

import Footer from 'src/components/Footer';

import { disconnectUser } from 'src/actions/auth';

const mapStateToProps = (state) => (
  {
    isConnected: state.auth.isConnected,

  }
);


const mapDispatchToProps = (dispatch) => ({
  // todo
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
