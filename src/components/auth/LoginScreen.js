import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { Error } from '../error/Error';
import { startLogin } from '../../actions/auth';
import { useHistory } from 'react-router-dom';


export const LoginScreen = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    //Manejo del formulario
    const [ formValues, handleInputChange ] = useForm({
        email: 'challenge@alkemy.org',
        password: 'react',
    });
    const { email, password } = formValues;

    //Manejo del error
    const [error, setError] = useState( false );

    //Submit del formulario
    const handleLogin = e => {
        e.preventDefault();

        //Validar
        if( !email.trim() || !password.trim() ){
            setError( true );
            return;
        }
        setError( false );
        dispatch( startLogin( email , password ) );
        history.replace('/');
    }

    return (
        <div className="bg-white m-5 p-5 border border-1 border-dark">
            <div className="row">
                <div className="col d-flex flex-column text-center">
                        <h2 className="fw-bold text-uppercase">Ingresar</h2>
                        <h4 className="text-center text-uppercase text-secondary fw-lighter">Equipo de Heroes App</h4>
                    
                    { error && <Error message="Campos invalidos, revise por favor." /> }

                    <form 
                        onSubmit={ handleLogin }
                        className="animate__animated animate__fadeIn animate_faster d-flex flex-column"
                    >
                        <label htmlFor="email" className="form-label mt-3 text-start">Email:</label>
                        <input
                            type="text"
                            placeholder="Email"
                            id="email"
                            name="email"
                            className="form-control mb-4 shadow p-3 bg-body rounded"
                            autoComplete="off"
                            value={ email }
                            onChange={ handleInputChange }
                            />

                        <label htmlFor="password" className="form-label text-start">Contraseña:</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Contraseña"
                            name="password"
                            className="form-control mb-3 shadow p-3 bg-body rounded"
                            value={ password }
                            onChange={ handleInputChange }
                        />
                        <div className="d-grid gap-2 col-6 mx-auto mt-4">
                            <button
                                type="submit"
                                className="btn form__button"
                            >
                                Enviar
                            </button>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    )
}
