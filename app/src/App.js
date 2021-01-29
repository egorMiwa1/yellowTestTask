import './App.css';
import Header from './components/Header/Header';
import JogsPage from './pages/JogsPage';
import LoginPage from './pages/LoginPage';
import InfoPage from './pages/InfoPage';
import ContactPage from './pages/ContactPage';

import {
  Route,
  Switch,
  Redirect,
  useLocation,
  useHistory,
} from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <div>
        <Switch>
          <Route path='/' component={LoginPage} exact />
          <Route path='/login' component={LoginPage} exact />
          <Route path='/about' component={JogsPage} exact />
          <Route path='/info' component={InfoPage} exact />
          <Route path='/contact' component={ContactPage} exact />
        </Switch>
      </div>
    </>
  );
}

export default App;
