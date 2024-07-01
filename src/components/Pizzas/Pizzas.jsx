import Header from '../Header/Header';
import PizzaCard from '../PizzaCard/PizzaCard';

function Pizzas(props) {
    let pizzaList = props.pizzaList;

    return (

        <>
            <Header />
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