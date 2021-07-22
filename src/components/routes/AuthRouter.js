import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { LoginScreen } from '../auth/LoginScreen';


export const AuthRouter = () => {
    return (
        <div className="container d-flex flex-column p-auto">
            <Switch>
                <Route path="/auth/login" component={ LoginScreen } />
                <Redirect to="/auth/login" />
            </Switch>
        </div>
    )
}
