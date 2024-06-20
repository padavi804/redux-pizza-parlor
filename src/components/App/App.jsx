import React from 'react';
import { useEffect, useState } from 'react';

import axios from 'axios';
import './App.css';

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
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
  
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
      {/* Pizzas go here for now */}
      {JSON.stringify(pizzaList)}
    </div>
  );
}

export default App;
