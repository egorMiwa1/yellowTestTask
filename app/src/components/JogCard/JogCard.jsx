import React from 'react';
import styles from './styles.module.css';
import { JogIcon } from '../../assets/index'

const JogCard = ({ date, speed, distance, time,style }) => {
  console.log(style)
  return (
    <div style={style} className={styles.container}>
      <JogIcon></JogIcon>
      <div className={styles.infoContainer}>
        <p className={styles.date}>{date}</p>
        <p style={{marginTop:0}} className={styles.info}><span className={styles.infoDescription}>Speed:</span> {speed} </p>
        <p className={styles.info}><span className={styles.infoDescription}>Distance:</span> {distance} km</p>
        <p className={styles.info}><span className={styles.infoDescription}>Time:</span> {time} min</p>
      </div>
    </div>
  );
}

export default JogCard;
