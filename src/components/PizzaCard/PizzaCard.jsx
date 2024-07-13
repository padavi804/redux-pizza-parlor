import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function PizzaCard(props) {
    let pizza = props.pizza;
    const dispatch = useDispatch();
    let [orderTotal, setOrderTotal] = useState(0);
    const pizzaCart = useSelector(store => store.pizzaCart);


    useEffect(() => {
        let newOrderTotal = 0;
        for (let pizza of pizzaCart) {
            newOrderTotal += Number(pizza.price);
        }
        dispatch({ type: 'SET_TOTAL', payload: newOrderTotal.toFixed(2) });
        setOrderTotal(newOrderTotal);
        
    }, [pizzaCart])

    const handleAddPizza = (event) => {
        event.preventDefault();
        dispatch({ type: 'ADD_PIZZA', payload: { name: pizza.name, price: pizza.price } });
    }

    return (
        <>
            <Box sx={{ '& > :not(style)': { m: 1 }, }}>
                <img src={pizza.image_path} />
                <h4>{pizza.name}</h4>
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