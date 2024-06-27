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

// must be passed GET order route
function Customer() {

    let [customerName, setCustomerName] = useState('');
    let [customerAddress, setCustomerAddress] = useState('');
    let [customerCity, setCustomerCity] = useState('');
    let [customerZip, setCustomerZip] = useState('');

    const addCustomer = (evt) => {
        evt.preventDefault();
        console.log(`Adding order for ${customerName} is being added`)

        axios({
            method: 'POST',
            url: '/api/order',
            data: {
                customer_name: customerName,
                street_address: customerAddress,
                city: customerCity,
                zip: customerZip
            }
        })
            .then(response => {
                console.log('Customer info received', response);
                // fetchList(); set GET route info when merged
                setCustomerName('');
                setCustomerAddress('');
                setCustomerCity('');
                setCustomerZip('');
            })
            .catch(error => {
                alert('Customer information not received');
                console.log(error);
            })

    }


    return (
        <div>
            <h2>Step 2: Customer Information</h2>
            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }}
                noValidate
                autoComplete="off"
                onSubmit={addCustomer}
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
                        name="pickUpDelivery" >
                        <FormControlLabel value="pickup" control={<Radio />} label="Pick-Up" />
                        <FormControlLabel value="delivery" control={<Radio />} label="Delivery" />
                    </RadioGroup>
                </FormControl>
                <br />
                <Button variant="contained" color="error" type="submit">Next</Button>
            </Box>
        </div>
    )
}
export default Customer;