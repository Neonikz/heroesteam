import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect  
} from "react-router-dom";
import { AuthRouter } from './AuthRouter';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

    const [isLoggedIn, setOnline] = useState(false);

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute isAuthenticated={isLoggedIn} path="/auth" component={ AuthRouter } />
                    <PrivateRoute exact isAuthenticated={isLoggedIn} path="/" component={ DashboardRoutes } />
                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </Router>
    )
}
