import React from 'react';
import styles from './styles.module.css'

const DateFilter = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <p className={styles.inputLabel}>Date from</p>
        <input className={styles.input} type="text" name="" id=""/>
      </div>
      <div style={{marginLeft:45}} className={styles.inputContainer}>
        <p className={styles.inputLabel}>Date to</p>
        <input className={styles.input} type="text" name="" id=""/>
      </div>
    </div>
  );
}

export default DateFilter;
