import PizzaCard from '../PizzaCard/PizzaCard';

function Pizzas(props) {
    let pizzaList = props.pizzaList;

    return (
        <>
            
            {
                
                pizzaList.map(
                    (pizza) => (
                        <PizzaCard pizza={pizza} />
                    )
                )
            }
            
        </>
    )
}

export default Pizzas;