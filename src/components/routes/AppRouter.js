import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Redirect  
} from "react-router-dom";
import { login } from '../../actions/auth';
import { LoginScreen } from '../auth/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

    const dispatch = useDispatch();
    const token = localStorage.getItem('token')
    
    useEffect(() => {
        if(token){
            dispatch( login() )
        }
    }, [dispatch,token]);
    
    const { logged } = useSelector( state => state.auth );
    
    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute exact isAuthenticated={logged} path="/auth/login" component={ LoginScreen } />
                    <PrivateRoute isAuthenticated={logged} path="/" component={ DashboardRoutes } />
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}
