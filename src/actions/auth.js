import Swal from 'sweetalert2';
import { types } from "../types/types";


export const startLogin = ( email, password ) => {
    return async( dispatch ) => {
        
        const resp = await fetch( 'http://challenge-react.alkemy.org/', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body:JSON.stringify({email, password})
        })
        const body = await resp.json();
        if( body ){
            localStorage.setItem('token', body.token );
            localStorage.setItem('token-init-date', new Date().getTime() );

            dispatch( login() );
            Swal.fire( 'Conectado', 'Datos válidos' , 'success' );
            
        }else{
            Swal.fire( 'Error', 'Ingrese un email o contraseña valido' , 'error' );
        }
    }
}

export const login = () => ({ type: types.authLogin })

export const logout = () => ({ type: types.authLogout })