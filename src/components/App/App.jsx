import React from 'react';
import { useEffect, useState } from 'react';

import axios from 'axios';
import './App.css';

import Pizzas from '../Pizzas/Pizzas';
import { HashRouter as Router, Route } from 'react-router-dom';
import AdminOrders from '../AdminOrders/AdminOrders';
import Customer from '../Customer/Customer.jsx';
import Checkout from '../Checkout/Checkout.jsx';
import ThankYou from '../ThankYou/ThankYou.jsx';


function App() {
  const [pizzaList, setPizzaList] = useState([]);
  useEffect(() => {
    fetchPizzas();
  }, [])

  const fetchPizzas = () => {
    axios({
      method: 'GET',
      url: '/api/pizza'
    })
      .then((response) => {
        console.log('response.data: ', response.data);
        setPizzaList(response.data);
      })
      .catch((err) => {
        console.log('Error getting Pizza:', err);
      });
  }

  return (
    <Router>
      <div className='App'>

        <header className='App-header'>
          <h1 className='App-title'>Prime Pizza</h1>
        </header>
      
  <Pizzas pizzaList={pizzaList} />

        <img src='images/pizza_photo.png' />
        <p>Pizza is great.</p>
        <Route path='/' exact>
          <Pizzas pizzaList={pizzaList} />
        </Route>
        <Route path='/checkout'>
          <Checkout />
        </Route>
        <Route path='/admin' >
          <AdminOrders />
        </Route>

        <Route path='/customer'>
          {/* localhost:5173/#/customer */}
          <Customer />
        </Route>

        <Route path='/thankyou' >
          <ThankYou />
        </Route>

      </div>
    </Router>
  );
}

export default App;
