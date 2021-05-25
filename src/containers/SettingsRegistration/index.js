import { connect } from 'react-redux';

import SettingsRegistration from 'src/components/SettingsRegistration';

import { submitRegistration, updateField, setErrorMessage } from 'src/actions/auth';

const mapStateToProps = (state) => (
  {
    email: state.auth.email,
    password: state.auth.password,
    nickname: state.auth.nickname,
    errorMessage: state.auth.errorMessage,
  }
);


const mapDispatchToProps = (dispatch) => ({
  submitForm: () => {
    const action = submitRegistration();
    dispatch(action);
  },

  updateField: (identifier, newValue) => {
    console.log(identifier)
    const action = (updateField(identifier, newValue));
    dispatch(action);
  },

  setErrorMessage: (message) => {
    const action = (setErrorMessage(message));
    dispatch(action);
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsRegistration);
