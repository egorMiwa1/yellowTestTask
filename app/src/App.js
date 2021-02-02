import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {authUser} from './redux/actions/authActions'

import './App.css';
import Header from './components/Header/Header';
import JogsPage from './pages/JogsPage';
import LoginPage from './pages/LoginPage';
import InfoPage from './pages/InfoPage';
import ContactPage from './pages/ContactPage';
import { AddIcon } from './assets/index';
import AddJogForm from './components/AddJogForm/AddJogForm';

import {
  Route,
  Switch,
  Redirect,
  useLocation,
  useHistory,
} from "react-router-dom";



function App() {
  const dispatch = useDispatch()
  const history = useHistory();

  const addJogHandler = () =>{
    history.push('/add-jog')
  }

  useEffect(() => {
    dispatch(authUser());
  }, []);

  return (
    <>
      <Header />
      <div>
        <Switch>
          <Route path='/' component={LoginPage} exact />
          <Route path='/login' component={LoginPage} exact />
          <Route path='/jogs' component={JogsPage} exact />
          <Route path='/info' component={InfoPage} exact />
          <Route path='/contact' component={ContactPage} exact />
          <Route path='/add-jog' component={AddJogForm} exact />
        </Switch>
      </div>
      <AddIcon onClick={addJogHandler} className='addIcon' />
    </>
  );
}

export default App;
