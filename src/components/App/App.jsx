import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Customer from './Customer/Customer.jsx'

function App() {

  return (
    <Router>
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
  
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
  
  <Route path='/customer'>
  {/* localhost:5173/#/customer */}
    <Customer />
  </Route>

    </div>
    </Router>
  );
}

export default App;
