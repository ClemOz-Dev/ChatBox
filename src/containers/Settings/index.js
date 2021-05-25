import { connect } from 'react-redux';

import Settings from 'src/components/Settings';

import { submitLogin, updateField } from 'src/actions/auth';

const mapStateToProps = (state) => (
  {
    email: state.auth.email,
    password: state.auth.password,
  }
);


const mapDispatchToProps = (dispatch) => ({
  submitForm: () => {
    const action = submitLogin();
    dispatch(action);
  },

  updateField: (identifier, newValue) => {
    const action = (updateField(identifier, newValue));
    dispatch(action);
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
