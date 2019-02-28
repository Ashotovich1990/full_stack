import React from 'react';
import WelcomeContainer from './auth/welcome_container';
import {Route, Switch} from 'react-router-dom';
import SignupFormContainer from './auth/signup_form_container';
import LoginFormContainer from './auth/login_form_container';
import {WelcomeOffer} from './auth/welcome_offer'

const App = () => (
    <div>
        <header id="main-header">
            <WelcomeContainer />
        </header>
        <Switch>
        <Route exact path="/signup" component={SignupFormContainer} />
        <Route exact path="/login" component={LoginFormContainer} />
        <Route exact patch="/" component={WelcomeOffer}/>
        </Switch>

    </div>
)

export default App;