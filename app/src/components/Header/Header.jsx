import React from 'react';
import styles from './styles.module.css'
import {Logo} from '../../assets/index'

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo className={styles.logo}></Logo>
    </header>
  );
}

export default Header;