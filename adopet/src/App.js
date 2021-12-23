import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch,

} from "react-router-dom";


import Home from '../Home';
import Donate from '../Donate';
import Addanimal from '../Addanimal';
import Animal from '../Animal';
import cat from "../Animal/cat";
import dog from "../Animal/dog";


class App extends Component {
  render(){
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/Addanimal" component={Addanimal} />
        <Route path="/donate" component={Donate} />
        <Route path="/cat" component={cat} />
        <Route path="/dog" component={dog} />
        <Route path ="/animal" component= {Animal}/>
      </Switch>
    </Router>
  );
  }
}

export default App;
