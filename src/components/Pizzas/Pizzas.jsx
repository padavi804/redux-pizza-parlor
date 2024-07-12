
import { useState } from 'react';
import PizzaCard from '../PizzaCard/PizzaCard';
import { useSelector } from 'react-redux';

function Pizzas(props) {
    let pizzaList = props.pizzaList;
    console.log('props', props);

    return (

        <>
            <div className='pizza-list'>
            {pizzaList.map((pizza) => (<div key={pizza.id}><PizzaCard pizza={pizza} /></div>))}
            <form>
                <button type="submit">NEXT</button>
           </form>
            </div>
        </>
    )
}

export default Pizzas;