import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPokemon, pokemonState} from "../../redux/slices/pokemonSlice";
import {useNavigate, useParams} from "react-router-dom";
import {Button, CircularProgress} from "@mui/material";
import style from './About.module.css'
const AboutPage = () => {
    const dispatch = useDispatch()
    const {pokemon, load} = useSelector(pokemonState)
    const {id} = useParams()
    const navi = useNavigate()
    const back = () => navi(-1)


    useEffect(() => {
        dispatch(getPokemon(id))
        console.log(pokemon)
    }, [dispatch, id])
    return (
        <div className={style.about}>
            <Button className={style.back} onClick={back} variant='contained'>back</Button>
            {
                !load
                    ?
                    <div className={style.blockA}>
                        <h2>{pokemon?.name}</h2>
                        <div className={style.info}>
                            <p>height: {pokemon?.height}</p>
                            <p>{pokemon?.base_experience}</p>
                        </div>
                        <div className={style.aboutI}>
                            <img src={pokemon?.sprites?.other?.dream_world?.front_default} alt=""/>
                            <img src={pokemon?.sprites?.other?.home?.front_default} alt="pokemon"/>

                        </div>

                        <div className={style.aboutMini}>
                            <img src={pokemon?.sprites?.back_default} alt="pokemon"/>
                            <img src={pokemon?.sprites?.front_default} alt="pokemon"/>
                        </div>
                    </div>
                    :
                    <div>
                        <CircularProgress/>
                    </div>
            }

        </div>
    );
};

export default AboutPage;