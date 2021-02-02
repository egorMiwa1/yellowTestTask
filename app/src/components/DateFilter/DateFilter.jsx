import React, { useEffect, useState } from 'react';
import styles from './styles.module.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { filterByDate } from '../../redux/actions/jogsActions'
import { useDispatch } from 'react-redux'

const DateFilter = () => {
  const dispatch = useDispatch()
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  
  useEffect(() => {
    if (+startDate && +endDate) {
      dispatch(filterByDate(+startDate, +endDate))
    }
  }, [startDate, endDate])

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <p className={styles.inputLabel}>Date from</p>
        <DatePicker className={styles.input} selected={startDate} onChange={date => setStartDate(date)} />
      </div>
      <div style={{ marginLeft: 45 }} className={styles.inputContainer}>
        <p className={styles.inputLabel}>Date to</p>
        <DatePicker className={styles.input} selected={endDate} onChange={date => setEndDate(date)} />
      </div>
    </div>
  );
}

export default DateFilter;
