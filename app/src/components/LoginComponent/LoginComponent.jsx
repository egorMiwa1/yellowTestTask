import React from 'react';
import styles from './styles.module.css'
import { BearFace } from '../../assets/index'

const LoginComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <BearFace></BearFace>
        <button className={styles.button}>
          Let me in
      </button>
      </div>
    </div>
  );
}

export default LoginComponent;