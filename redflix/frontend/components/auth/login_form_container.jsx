import {connect} from 'react-redux';
import SessionForm from './session_form';
import {login} from '../../actions/session_actions';

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.sessionErrors,
    formType: "Log In",
});

const mapDispatchToProps = dispatch => ({
    processForm: (user) => dispatch(login(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);