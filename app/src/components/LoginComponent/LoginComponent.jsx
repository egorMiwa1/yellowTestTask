import React, { useEffect } from 'react';
import styles from './styles.module.css'
import { BearFace } from '../../assets/index'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/actions/authActions'
import { useHistory } from 'react-router-dom';

const LoginComponent = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector(state => state.user.isLogged);
  const history = useHistory()
  useEffect(() => {
    if (isLogged) history.push('/jogs')
  }, [isLogged])

  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <BearFace></BearFace>
        <button onClick={() => dispatch(login('hello'))} className={styles.button}>
          Let me in
      </button>
      </div>
    </div>
  );
}

export default LoginComponent;