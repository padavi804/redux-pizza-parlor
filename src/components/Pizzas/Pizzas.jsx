
import { useState } from 'react';
import PizzaCard from '../PizzaCard/PizzaCard';
import { useSelector } from 'react-redux';

function Pizzas(props) {
    let pizzaList = props.pizzaList;
    let orderTotal = pizzaList.price;
    console.log('props', props);
    // let [orderTotal, setOrderTotal] = useState(0);
    // const pizzaOrdered = useSelector(store => store.pizzaOrdered);

    // const calculateTotal = (event) => {
    //     event.preventDefault();

    //     setOrderTotal(orderTotal + Number(pizzaOrdered.price));
        
    //     console.log('pizzaOrdered.price:', pizzaOrdered.price);
        
    // }
    

    // console.log('order TotalL', orderTotal);
    return (

        <>
            
            {pizzaList.map((pizza) => (<PizzaCard pizza={pizza} />))}
            <form >
                <button type="submit">NEXT</button>
           </form>

        </>
    )
}

export default Pizzas;