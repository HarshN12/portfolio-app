import React from 'react';
import Card from './Card';
import styles from './Container.module.css'; 

function Container() {
  const Names = ['person_1', 'person_2', 'person_3','person_4','person_5','person_6'];

  const cardComponents = Names.map((Name, index) => (
    <Card key={index} Name={Name} />
  ));
  

  return (
    <div className={styles['container']}>
      <h2>Members Currently Working With Us</h2>
      <div className={styles['box-container']}>
        {cardComponents}
      </div>
    </div>
  );
}

export default Container;
