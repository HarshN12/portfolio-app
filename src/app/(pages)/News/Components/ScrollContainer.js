// ScrollContainer.js

import React from 'react';
import styles from './ScrollContainer.module.css'; // Import CSS module

function ScrollContainer({text='Some Text On Latest Update.'}) {
  return (
    <div className={styles.scrollContainer}>
      <div id="scroll-text" className={styles.scrollText}>{text}</div>
    </div>
  );
};

export default ScrollContainer;
