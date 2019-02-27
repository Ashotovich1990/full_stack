import React from 'react';
import {Link} from 'react-router-dom';

class Welcome extends React.Component {
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
      e.preventDefault();
      this.props.logout();
    }

    render() {
      let content = this.props.currentUser ? 
        (<div>
         <h3>Welcome, {this.props.currentUser.username}</h3>
         <button onClick={this.handleClick}>Log Out</button>
         </div> ) : ( <div>
             <Link to="/signup">Sign Up</Link>
             <Link to="/login">Log In</Link>
         </div> );
       
       return content;
    }
}

export default Welcome;