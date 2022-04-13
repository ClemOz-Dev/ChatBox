import { connect } from 'react-redux';
import Settings from 'src/components/Settings';
import { toggleSettingsOpen, updateSettingsField, submitLogin } from 'src/actions/chat';

const mapStateToProps = (state) => ({  
  open: state.settingsOpen,
  email: state.email,
  password: state.password,
});



const mapDispatchToProps = (dispatch) => ({  
  toggleOpen: () => {
    const action = toggleSettingsOpen();
    dispatch(action);
  },
  updateSettingsField: (identifier, newValue) => {
    
    const action = updateSettingsField(identifier, newValue);
    dispatch(action);
  },
  submitLogin: () => {
    const action = submitLogin();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
