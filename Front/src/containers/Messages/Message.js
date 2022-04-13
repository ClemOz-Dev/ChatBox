import { connect } from 'react-redux';
import Message from 'src/components/Messages/Message';

const mapStateToProps = (state, ownProps) => { 
  return {  
    isOwn: ownProps.nickname === state.nickname,
  };
};



const mapDispatchToProps = (dispatch) => ({  
});

export default connect(mapStateToProps, mapDispatchToProps)(Message);
