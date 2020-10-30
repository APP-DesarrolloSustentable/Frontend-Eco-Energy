import React from 'react';
import './App.css';
import NavBar from './componentNav/NavBar'
import Login from './pages/Login'
import Register from './pages/Register'
import Menu from './pages/Menu'
import Reports from './pages/Reports'
import Support from './pages/Support'
import Configuration from './pages/Configuration';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


function App (){
  return (
    <Router>      
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <div>
        <NavBar/>
        <Route exact path="/menu" component={Menu}/>
        <Route exact path="/reports" component={Reports}/>
        <Route exact path="/configuration" component={Configuration}/>
        <Route exact path="/support" component={Support}/>
        </div>
      </Switch>
    </Router>
  )
}

export default App;
