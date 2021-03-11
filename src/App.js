import {HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import './App.css';
import Chat from './rutes/Chat';
import Join from './rutes/Join';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path='/' render={() => <Redirect to="/join" />}/>
        <Route path='/join' component={Join}/>
        <Route path='/chat' component={Chat}/>
      </Switch>
    </Router>
  );
}

export default App;
