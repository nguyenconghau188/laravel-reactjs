import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import AuthenticatedRoute from './authenticate-route';
import {getCurrentUser} from '../../../stores/modules/authenticate';
import propsToJS from '../../../utils/prop-to-js';

const mapStateToProps = state => ({
  currentUser: getCurrentUser(state)
});

export default withRouter(connect(mapStateToProps, null), propsToJS(AuthenticatedRoute));