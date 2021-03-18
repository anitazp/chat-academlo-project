import {HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import './App.css';
import Chat from './rutes/Chat';
import Join from './rutes/Join';
import Login from './rutes/Login';
import Signup from './rutes/Signup';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path='/' render={() => <Redirect to="/login" />}/>
        <Route path='/join' component={Join}/>
        <Route path='/chat' component={Chat}/>
        <Route path='/login' component={Login}/>
        <Route path='/signup' component={Signup}/>
      </Switch>
    </Router>
  );
}

export default App;
