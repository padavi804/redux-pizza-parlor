
function PizzaCard(props) {
    let pizza = props.pizza

    return (
        <>
        <img src={pizza.image_path} /> 
        <li key={pizza.id}>
            {pizza.name}
        </li>
        </>
    )

    
}
export default PizzaCard;