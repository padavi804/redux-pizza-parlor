import { Box } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function PizzaCard(props) {
    let pizza = props.pizza;
    const dispatch = useDispatch();
    let [pizzaToAdd, setPizzaToAdd] = useState({name: pizza.name, price: pizza.price});
    let [orderTotal, setOrderTotal] = useState(0);
    const pizzaCart = useSelector(store => store.pizzaCart);



    const handleAddPizza = (event) => {
        event.preventDefault();
        
        let newOrderTotal = 0;
         for(let pizza of pizzaCart){
           newOrderTotal += Number(pizza.price);
           
        }
        setOrderTotal(newOrderTotal);
        dispatch({type: 'SET_TOTAL', payload: newOrderTotal});
        dispatch({type: 'ADD_PIZZA', payload: {name: pizzaToAdd.name, price: pizzaToAdd.price}});
        
        console.log('Order Total', orderTotal);
        //setOrderTotal();
        //console.log('pizzaToadd.price', pizzaToAdd.price)     
        
    }
   
    return (
        <>
        <Box sx={{ '& > :not(style)': { m: 1 }, }}>
            <img src={pizza.image_path} /> 
            <h4 key={pizza.id}>{pizza.name}</h4>
            <h6>{pizza.description}</h6>
            <h6>{pizza.price}</h6>
            <button
            type="button"
            onClick={handleAddPizza}>Add</button>
            
        </Box>
        </>
    )

    
}
export default PizzaCard;