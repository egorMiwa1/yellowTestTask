import React from 'react';
import styles from './styles.module.css';
import { CloseIcon } from '../../assets/index';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import { addJog } from '../../redux/actions/jogsActions';
import { useDispatch } from 'react-redux';

const JogInput = ({ title, style, register }) => {
  return (
    <div style={style} className={styles.inputContainer}>
      <p className={styles.inputLabel}>{title}</p>
      <input ref={register} className={styles.input} type="text" name={title} id="" />
    </div>
  );
}

const AddJogForm = () => {
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const dispatch = useDispatch()
  
  const onSubmit = (data) => {
    dispatch(addJog({...data}))
    history.goBack();
  };
  const onCloseHandler = () => {
    history.goBack()
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
      <div className={styles.fieldsContainer}>
        <JogInput register={register} title={"distance"} />
        <JogInput register={register} style={{ marginTop: 25 }} title={"time"} />
        <JogInput register={register} style={{ marginTop: 25 }} title={"date"} />
        <button className={styles.saveButton} type='submit'>save</button>
      </div>
      <CloseIcon onClick={onCloseHandler} className={styles.closeIcon} />
    </form>
  );
}

export default AddJogForm;
