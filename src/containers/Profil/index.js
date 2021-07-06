import { connect } from 'react-redux';

import Profil from 'src/components/Profil';

import { disconnectUser } from 'src/actions/auth';

const mapStateToProps = (state) => (
  {
   nickname: state.auth.nickname,
  }
);


const mapDispatchToProps = (dispatch) => ({
 // todo
});

export default connect(mapStateToProps, mapDispatchToProps)(Profil);
