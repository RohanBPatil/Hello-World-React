import './App.css';
import React from 'react';
import Home from './components/home/home';
// import react router
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

class App extends React.Component{
  render(){
    return(
      <div>
      <Router>
      <Switch>
      <Route path ="">
      <Home />
      </Route>
      </Switch>
      </Router>
      </div>
    );
    }
}

export default App;
