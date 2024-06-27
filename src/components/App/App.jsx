import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import AdminOrders from '../AdminOrders/AdminOrders';
function App() {

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Prime Pizza</h1>
        </header>


        <Route path='/admin' >
          <AdminOrders />
        </Route>
      </div>
    </Router>

  );
}

export default App;
