import React, {useEffect, useState} from 'react';
import style from './PokeCard.module.css'
import {NavLink} from "react-router-dom";
const PokeCard = ({i}) => {
    const [img, setImg] = useState('')

    useEffect(() => {
        fetch(i.url)
            .then(res => res.json())
            .then(pok => setImg(pok.sprites?.other?.dream_world?.front_default))
    },[i.url])
    return (
        <li className={style.li}>
            <NavLink to={`/about/${i?.name}`}>
                <div  className={style.block}>
                    <p className={style.text} target={i?.name}>{i?.name}</p>
                    <div>
                        <img src={img} alt=""/>
                    </div>
                </div>
            </NavLink>
        </li>
    );
};

export default PokeCard;