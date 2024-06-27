import { Box } from "@mui/material";

function PizzaCard(props) {
    let pizza = props.pizza

    return (
        <>
        <Box sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }}>
            <img src={pizza.image_path} /> 
            <h4 key={pizza.id}>
                {pizza.name}
            </h4>
        </Box>
        </>
    )

    
}
export default PizzaCard;