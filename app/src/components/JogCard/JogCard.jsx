import React from 'react';
import styles from './styles.module.css';
import { JogIcon } from '../../assets/index'

const JogCard = ({ jog , style }) => {
  const date = new Date(jog.date);
  const time = new Date(jog.time);
  console.log(`${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`)
  return (
    <div style={style} className={styles.container}>
      <JogIcon></JogIcon>
      <div className={styles.infoContainer}>
        <p className={styles.date}>{`${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`}</p>
        <p style={{ marginTop: 0 }} className={styles.info}><span className={styles.infoDescription}>Speed:</span> {Math.round(jog.distance / time.getHours())} </p>
        <p className={styles.info}><span className={styles.infoDescription}>Distance:</span> {jog.distance} km</p>
        <p className={styles.info}><span className={styles.infoDescription}>Time:</span> {time.getMinutes()} min</p>
      </div>
    </div>
  );
}

export default JogCard;
