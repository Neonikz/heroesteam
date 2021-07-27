import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { types } from '../../types/types';

export const Navbar = () => {

    const dispatch = useDispatch();

    const history = useHistory();
    
    //Funcion para deslogear
    const handleLogout = () => {
        dispatch({
            type: types.authLogout,
        });
        localStorage.clear()
        history.replace('/auth/login');   
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
            <Link 
                className="navbar-brand" 
                to="/"
            >
                EQUIPO DE HEROES APP
            </Link>

            <div className="navbar-collapse">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        aria-current="page"
                        to="/"
                    >
                        HOME
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        aria-current="page"
                        to="/search"
                    >
                        BUSCAR
                    </NavLink>

                </ul>
            </div>

            <div className="navbar-collapse d-flex justify-content-sm-end">
                <ul className="navbar-nav text-end">

                    <button 
                        className="btn nav-item nav-link"
                        onClick={ handleLogout }
                    >
                        SALIR
                    </button>
                </ul>
            </div>
            </div>            
        </nav>
    )
}