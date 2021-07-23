import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Redirect  
} from "react-router-dom";
import { login } from '../../actions/auth';
import { AuthRouter } from './AuthRouter';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

    const dispatch = useDispatch();
    const { logged } = useSelector( state => state.auth );

    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token){
            dispatch( login )
        }
    }, [dispatch,logged]);

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute isAuthenticated={logged} path="/auth/login" component={ AuthRouter } />
                    <PrivateRoute  isAuthenticated={logged} path="/" component={ DashboardRoutes } />
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}
