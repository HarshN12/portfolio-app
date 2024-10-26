import React from 'react';
import styles from './Card.module.css';
import info_icon_svg from '../../../assets/info.svg'
import PlaceholderImg from '../../../assets/equipments/eqp1.jpg';

const Lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium similique illum saepe voluptatum tempore consequuntur, aperiam fugit odit nobis! Assumenda aut modi, repellat fuga quibusdam iure in ducimus amet? Quasi?';


function Card({EqpName='Equipment Name',EqpImg= PlaceholderImg ,Model='w234-fg34-2342',Descrip=Lorem}){
  function toggleImgInfo() {
    const button = document.querySelector('.' + styles['show-info']);
    const card = button.closest('.' + styles['eq-card']);
    const imgInfo = card.querySelector('.' + styles['img-info']);
    // const icon = card.querySelector('.' + styles['info-icon']);
    const arrow1 = card.querySelector('.' + styles['arrow']);
    
    if (imgInfo &&  arrow1) {
        imgInfo.classList.toggle(styles['active']);
        // icon.classList.toggle('active');
        arrow1.classList.toggle(styles['active']);
    } else {
        console.error("One or more elements not found within the card.");
    }
}
    return(
        <div className={styles['eq-card']}>
          <div className={styles['img-container']}>
            <div className={styles['pic']} style={{ backgroundImage: `url(${EqpImg})` }}></div>
            <div className={styles['img-info']}>
              <button className={styles['show-info']} onClick={toggleImgInfo}><div className={styles['arrow']}></div></button>
              <div className={`${styles['eq-name']} ${styles['eq-info']}`}>
                <h4>Model :</h4>
                <p>{Model}</p>
              </div>
              <div className={`${styles['eq-discription']} ${styles['eq-info']}`}>
                <h4>Description :</h4>
                <p>{Descrip}</p>
              </div>
            </div>
            <div className={styles['info-icon']} style={{ backgroundImage: `url(${info_icon_svg})` }}></div>
          </div>
          <div className={styles['eq-name']}><h3>{EqpName}</h3></div>
        </div>
    )
}

export default Card;