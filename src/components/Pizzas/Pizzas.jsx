import PizzaCard from '../PizzaCard/PizzaCard';

function Pizzas(props) {
    let pizzaList = props.pizzaList;

    return (
        <>
            <ul>
            {
                
                pizzaList.map(
                    (pizza) => (
                        <PizzaCard pizza={pizza} />
                    )
                )
            }
            </ul>
        </>
    )
}

export default Pizzas;