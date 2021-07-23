import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {


    // const { user:{name}, dispatch } = useContext(AuthContext);
    // const history = useHistory();
    
    // const handleLogout = () => {
    //     dispatch({
    //         type: types.logout,
    //     });
        
    //     history.replace('/login');
        
    // }

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
                        // onClick={ handleLogout }
                    >
                        SALIR
                    </button>
                </ul>
            </div>
            </div>            
        </nav>
    )
}