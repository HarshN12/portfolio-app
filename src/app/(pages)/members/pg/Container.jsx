import Card from './Card';
import styles from './Container.module.css'; 

function Container() {
  const Names = ['person_1', 'person_2', 'person_3','person_4','person_5','person_6'];

  const cardComponents = Names.map((Name, index) => (
    <Card key={index} Name={Name} />
  ));

  return (
    <div className={styles['container']}>
      <h2>M.Tech</h2>
      <div className={styles['box-container']}>
        {cardComponents}
      </div>
    </div>
  );
}

export default Container;
