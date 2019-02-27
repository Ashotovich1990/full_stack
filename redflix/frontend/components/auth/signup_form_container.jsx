import {connect} from 'react-redux';
import SessionForm from './session_form';
import {signup} from '../../actions/session_actions';

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.sessionErrors,
    formType: "Sign Up",
});

const mapDispatchToProps = dispatch => ({
    processForm: (user) => dispatch(signup(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);