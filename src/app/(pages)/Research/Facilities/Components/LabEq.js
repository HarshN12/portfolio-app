import React from 'react';
import Card from './Card';
import styles from './LabEq.module.css'; // Import your CSS module

function LabEq() {
  const equipmentNames = ['ep1', 'ep2', 'ep3','ep4','ep5'];

  const cardComponents = equipmentNames.map((eqpName, index) => (
    <Card key={index} EqpName={eqpName} />
  ));
  console.log(cardComponents);

  return (
    <section className={styles['lab-eq']}>
      <h2>Lab Equipments</h2>
      <div className={styles['grid-facilities']}>
        {cardComponents}
      </div>
    </section>
  );
}

export default LabEq;
