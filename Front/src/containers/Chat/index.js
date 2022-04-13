import { connect } from 'react-redux';

import { connectWebsocket } from 'src/actions/chat';

import Chat from 'src/components/Chat';

const mapStateToProps = (state) => ({
  isAuthentified: state.nickname !== null,
});

const mapDispatchToProps = (dispatch) => ({
  initWebsocket: () => {
    dispatch(connectWebsocket());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
