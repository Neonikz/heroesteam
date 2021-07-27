import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroById } from '../../helpers/getHeroById';
// import batman from '../../assets/heroes/dc-batman.jpg'; Esto es para recursos estaticos


export const HeroScreen = ({ history }) => {
    
    const heroImages = require.context('../../assets/heroes', true);

    const { heroeId } = useParams();

    const hero = useMemo(() => getHeroById( heroeId ), [ heroeId ]); 

    if ( !hero ) {
        return <Redirect to="/" />;
    }
    
    
    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;
    
    const handleReturn = () =>{

        if ( history.length <= 2 ){
            history.push('/');
        }else{
            history.goBack();
        }

        // publisher === 'DC Comics' ? history.push(`/dc`) : history.push(`/`);
        // history.goBack();
    }

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img
                    // src={ `../assets/heroes/${ heroeId }.jpg` } Desde publics/assets
                    // src={batman}  import
                    src={ heroImages(`./${ heroeId }.jpg`).default }  
                    alt={ superhero }
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>

            <div className="col-8 animate__animated animate__fadeIn">
                <h3 className="text-center text-white"> { superhero } </h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b> Alter ego: { alter_ego }</b> </li>
                    <li className="list-group-item"> <b> Publisher: { publisher }</b> </li>
                    <li className="list-group-item"> <b> First Appearance: { first_appearance }</b> </li>
                </ul>

                <h5 className="text-center text-white mt-1"> Characters </h5>
                <p className="text-center text-white"> { characters } </p>

                <div className="d-flex justify-content-center">
                    <button 
                        className="btn btn-dark"
                        onClick={ handleReturn }
                    >
                        Volver
                    </button>
                </div>
            </div>
        </div>
    )
}
