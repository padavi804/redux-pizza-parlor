import { Box } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function PizzaCard(props) {
    let pizza = props.pizza
    const dispatch = useDispatch();
    //const pizzaOrdered = useSelector(store => store.pizzaOrdered);
    let [pizzaToAdd, setPizzaToAdd] = useState({name: pizza.name, price: pizza.price});

    const handleAddPizza = (event) => {
        // setPizzaToAdd({
        //     name: event.target.value.name,
        //     price: event.target.value.price
            
        // });
        dispatch({type: 'ADD_PIZZA', payload: {name: pizzaToAdd.name, price: pizzaToAdd.price}})
    }

    return (
        <>
        <Box sx={{ '& > :not(style)': { m: 1, width: 'ch' }, }}>
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