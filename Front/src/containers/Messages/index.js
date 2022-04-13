import { connect } from 'react-redux';


import Messages from 'src/components/Messages';



const mapStateToProps = (state) => ({  
  messages: state.messages,
});



const mapDispatchToProps = (dispatch) => ({  
});


export default connect(mapStateToProps, mapDispatchToProps)(Messages);



