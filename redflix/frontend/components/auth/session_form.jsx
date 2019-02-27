import React from 'react';
import {Link, Redirect} from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: "", password: "", email: ""};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.link = this.link.bind(this);
        this.content = this.content.bind(this);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value})
        }
    };

    handleSubmit(e) {
        e.preventDefault();
        
        this.props.processForm(this.state);
    }

    link() {
        if (this.props.formType === 'signup') {
            return <Link to='/login'>Log In</Link>;
        } else {
            return <Link to='/signup'>Sign Up</Link>;
        }
    }

    content() {
        if (this.props.currentUser) {
            return <Redirect to='/' />;
        } else {
            return (
            <div>
            <form onSubmit={this.handleSubmit}>
            <label>Email:
                <input type="text" value={this.state.email} onChange={this.update("email")}/>
             </label>
             <label>Username:
                <input type="text" value={this.state.username} onChange={this.update("username")}/>
             </label>
             <label>Password:
                <input type="password" value={this.state.password} onChange={this.update("password")}/>
             </label>
             <input type="submit" value={this.props.formType}/>
            </form>
            </div>
            );
        }
    }

    render() {
        const link = this.link();
        const errors = this.props.errors;
        const content = this.content();
        return (
            <div>
              {link}
              {errors}
              {content}
            </div>
        )
    }
}

export default SessionForm;