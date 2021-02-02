import React, { useState } from 'react';
import styles from './styles.module.css'
import { Logo, ActiveFilterIcon, FilterIcon } from '../../assets/index'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { toggleFilter } from '../../redux/actions/jogsActions';
import { isMobile } from 'react-device-detect';

const BurgerMenu = () => {
  return (
    <div className={styles.burgerMenuContainer}>
      <span className={styles.strip}></span>
      <span className={styles.strip}></span>
      <span className={styles.strip}></span>
    </div>
  )
}

const Header = () => {
  const isFilterOpen = useSelector(state => state.jogs.isFilterOpen);
  const dispatch = useDispatch();
  return (
    <header className={styles.header}>
      <Logo className={styles.logo}></Logo>

      <ul className={styles.navbar}>
        {!isMobile ?
          <>
            <li className={styles.menuItem}><NavLink activeClassName={styles.activeLink} to="/jogs" >JOGS</NavLink></li>
            <li style={{ marginLeft: 45 }} className={styles.menuItem}><NavLink activeClassName={styles.activeLink} to="/info">INFO</NavLink></li>
            <li style={{ marginLeft: 45 }} className={styles.menuItem}><NavLink activeClassName={styles.activeLink} to="/contact">CONTACT US</NavLink></li>
          </>
          : <BurgerMenu />}
        <div className={styles.filterIcon} onClick={() => dispatch(toggleFilter())}>
          {isFilterOpen ? <ActiveFilterIcon /> : <FilterIcon />}
        </div>
      </ul>
    </header>
  );
}

export default Header;