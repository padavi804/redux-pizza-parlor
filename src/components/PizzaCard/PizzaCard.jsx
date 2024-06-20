
function PizzaCard(props) {
    let pizza = props.pizza

    return (
        <>
            <img src={pizza.image_path} /> 
            <h1 key={pizza.id}>
                {pizza.name}
            </h1>
        </>
    )

    
}
export default PizzaCard;