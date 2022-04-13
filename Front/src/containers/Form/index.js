import { connect } from 'react-redux';

import { updateInputMessage, sendMessage } from 'src/actions/chat';

import Form from 'src/components/Form';

const mapStateToProps = (state) => ({
  value: state.inputMessage,
});

const mapDispatchToProps = (dispatch) => ({  
  setValue: (newValue) => {  
    const action = updateInputMessage(newValue);
    dispatch(action);
  },
  manageSubmit: () => {
    console.log('submit dans le container');    
    const action = sendMessage();
    dispatch(action);
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(Form);


