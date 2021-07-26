import React, { useMemo } from 'react'
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { getHeroByName } from '../../helpers/getHeroByName';
import { HeroCard } from './HeroCard';

export const SearchScreen = ({ history }) => {

    const location = useLocation();
    const { q = '' } = queryString.parse( location.search );

    
    const [formValues, handleInputChange] = useForm({
        searchText: q
    });
    const {searchText} = formValues;
    
    
    const herosFiltered = useMemo(() => getHeroByName( q ), [q])
    
    
    const handleSearch = (e) => {
        e.preventDefault();
        
        history.push(`?q=${searchText}`);
    }

    return (
        <div>
            <h2 className="text-white text-center">Busca un heroe para agregarlo a tu equipo</h2>
            <hr />

            <div className="row ">
                <div className="col-5 ">
                    <h4 className="text-white"> Buscador </h4>
                    <hr />

                    <form onSubmit={ handleSearch }>
                        <input 
                            type="text"
                            placeholder="Busca a tu heroe"
                            className="form-control"
                            name="searchText"
                            value={ searchText }
                            autoComplete="off"
                            onChange={ handleInputChange }
                        />

                        <button
                            type="submit"
                            className="btn mt-2 form__button"
                            onClick={ handleSearch }
                        >
                            Buscar....
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4 className="text-white"> Resultado </h4>
                    <hr />


                    { ( !q ) 
                        &&  
                        <div className="alert alert-info">
                            Busca un heroe!
                        </div>
                    }
                    { ( q !== '' && !herosFiltered.length ) 
                        &&  
                        <div className="alert alert-danger">
                            No se encontro un heroe con "{q}"!
                        </div>
                    }

                    {
                        herosFiltered.map( hero => (
                            <HeroCard
                                key={hero.id}
                                {...hero}
                                
                            />
                        ))
                    }

                </div>
            </div>
        </div>
    )
}
