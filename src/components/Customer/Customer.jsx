import * as React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux'

import Header from '../Header/Header';

function Customer() {

    let [customerName, setCustomerName] = useState('');
    let [customerAddress, setCustomerAddress] = useState('');
    let [customerCity, setCustomerCity] = useState('');
    let [customerZip, setCustomerZip] = useState('');
    let [type, setType] = useState ('pickup');
    let total = 10;

    const history = useHistory();

    const dispatch = useDispatch();
    const addCustomer = (e) => {
        e.preventDefault();
        console.log('support submitted');
        dispatch({ type: 'SET_CUSTOMER_NAME', payload: customerName });
        dispatch({ type: 'SET_CUSTOMER_ADDRESS', payload: customerAddress });
        dispatch({ type: 'SET_CUSTOMER_CITY', payload: customerCity });
        dispatch({ type: 'SET_CUSTOMER_ZIP', payload: customerZip });
        dispatch({ type: 'SET_TYPE', payload: type });

        history.push('/checkout');

    }
    

    // const addCustomer = (evt) => {
    //     evt.preventDefault();
    //     console.log(`Order for ${customerName} is being added`)



    
   


    return (
        <><div>
            <Header />
            <h2>Step 2: Customer Information</h2>
            {/* <form > */}
            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }}
                noValidate
                autoComplete="off"
                onSubmit={(e) => addCustomer(e)}
            >
                <TextField id="outlined-basic" label="Name" variant="outlined" onChange={(evt) => setCustomerName(evt.target.value)} value={customerName} />
                <br />
                <TextField id="outlined-basic" label="Street Address" variant="outlined" onChange={(evt) => setCustomerAddress(evt.target.value)} value={customerAddress} />
                <br />
                <TextField id="outlined-basic" label="City" variant="outlined" onChange={(evt) => setCustomerCity(evt.target.value)} value={customerCity} />
                <br />
                <TextField id="outlined-basic" label="ZIP" variant="outlined" onChange={(evt) => setCustomerZip(evt.target.value)} value={customerZip} />
                <br />
                <FormControl>
                    <FormLabel id="pickUpDelivery"></FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="pickUpDelivery"
                        name="pickUpDelivery"
                        value={type}
                        onChange={(evt) => setType(evt.target.value)}>
                        <FormControlLabel value="pickup" control={<Radio />} label="Pick-Up" />
                        <FormControlLabel value="delivery" control={<Radio />} label="Delivery" />
                    </RadioGroup>
                </FormControl>
                <br />
                <Button variant="contained" color="primary" type="submit"
                >Next</Button>
            </Box>
            {/* </form> */}
        </div></>
    )
}
export default Customer;