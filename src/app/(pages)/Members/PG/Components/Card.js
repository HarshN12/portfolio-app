import React from 'react';
import styles from './Card.module.css';
import PlaceholderImg from '../../../assets/unknownman.png';

const Lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi?';


function Card({Name='Name',CardImg= PlaceholderImg ,Descrip=Lorem}){
    return(
    <div className = {styles['box']}>
      <img src={CardImg} alt="profile_img"></img>
      <h3>{Name}</h3>
      <p>{Descrip}</p>
    </div>
    )
}

export default Card;