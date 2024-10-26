// Highlights.js

import React from 'react';
import styles from './Highlights.module.css'; // Import CSS module

const Highlights = () => {
  // Array of image file names
  const images = [
    "01.JPG", "02.JPG", "03.JPG", "04.JPG", "05.JPG",
    "06.JPG", "07.JPG", "08.JPG", "09.JPG", "03.JPG", "04.JPG"
  ];

  return (
    <div className={styles.highlights}> {/* Use CSS module for class name */}
      <h2>Highlights</h2>
      <div className={styles.horizontalScrollWrapper}> {/* Use CSS module */}
        {images.map((image, index) => (
          <div key={index} className={`${styles.imgWrapper} ${index%2 === 0? styles[`slower${index % 3}`] : styles[`faster${index % 3}`]}  ${index === images.length - 1 ? styles.last : ''} ${index % 4 === 2 ? styles.vertical : ''}`}>
            {/* Use require for dynamic image loading */}
            <a><img src={require(`../../../assets/highlights/${image}`)} alt="" /></a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Highlights;
