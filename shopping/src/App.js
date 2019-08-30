import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header/Header'
import Detail from './containers/Detail/Detail'
import { CartProvider } from './context/Cart'
import Home from './containers/HomeScreen/Home'
import CartScreen from './containers/CartScreen/CartScreen'




class App extends Component {
  render() {
    return (
    <CartProvider>
      <Router>
          <div className="app">
            <Header />
              <Route path="/" exact component={Home} />
              <Route path="/Detail" component={Detail} />
              <Route path="/CartScreen" component={CartScreen} />
          </div>
      </Router>
    </CartProvider>
    );
  }
}

export default App;
