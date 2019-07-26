import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, } from "react-router-dom";
import HomeScreen from "./containers/HomeScreen";
import TodoDetailScreen from "./containers/TodoDetailScreen";


class App extends React.Component{
  render() {
    return(
        <Router>
            
          <Route exact path="/" component={HomeScreen} />
          <Route path="/detail/:id" component={TodoDetailScreen} />
        </Router>
    );
  }
}

export default App;