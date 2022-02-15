import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from '../App';
import SignUpContainer from '../containers/SignUpContainer';
import LoginContainer from '../containers/LoginContainer';
import Favorite from './Favorite';
import Home from './Home';

const Routes = () => {
    return (
        <Switch>
            <div>
                <Route exact path='/' component={LoginContainer} />
                <Route exact path='/signup' component={SignUpContainer} />
                <Route exact path='/favorite' component={Favorite} />
                <Route exact path='/home' component={Home} />
                
            </div>
        </Switch>
    )
}

export default Routes;