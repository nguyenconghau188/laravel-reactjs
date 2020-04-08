import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import Authenticate from './authenticate';
import { getCurrentUser, login, register } from '../../../stores/modules/authenticate';
// import propsToJS from '../../../utils/prop-to-js';

const mapStateToProps = state => ({
  currentUser: getCurrentUser(state)
});

const mapDispatchToProps = dispatch => ({
  register: data => dispatch(register(data)),
  login: data => dispatch(login(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Authenticate);