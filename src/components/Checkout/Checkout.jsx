import './Checkout.css';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';





function Checkout() {

  const customerName = useSelector (store => store.customerName)
  const customerAddress = useSelector (store => store.customerAddress)
  const customerCity = useSelector (store => store.customerCity)
  const customerZip = useSelector (store => store.customerZip)
  const type = useSelector (store => store.type)




  const history = useHistory();

  const handleClick = () => {
    history.push('/ThankYou');
  

        axios({
            method: 'POST',
            url: '/api/order',
            data: {
                customer_name: customerName,
                street_address: customerAddress,
                city: customerCity,
                zip: customerZip,
                type: type,
                total: 25,
                pizzas: [{
                    id: 1,
                    quantity: 1
                }, {
                    id: 2,
                    quantity: 1
                }]
            }
        })
            .then(response => {
                console.log('Customer info received', response);
                // setCustomerName('');
                // setCustomerAddress('');
                // setCustomerCity('');
                // setCustomerZip('');
                // setType('pickup');
            })
            .catch(error => {
                alert('Customer information not received');
                console.log(error);
            })
          }
  // const data = [
  //   {
  //     customer_name: '',
  //     address: '',
  //     city: '',
  //     state: '',
  //     type: '',
  //     pizza_name: '',
  //     price: 0,
  //     total: 0
  //   }
  // ]

  return (
    <>
<h2>Checkout</h2>
<div className= "Contact" >
    <p>{customerName}</p>
    <p>{customerAddress}</p>
    <p>{customerCity}</p>
    <p>{customerZip}</p>
    <p>{type}</p>
</div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Pizza</TableCell>
              <TableCell align="right">Price</TableCell>
            </TableRow>
          </TableHead>
          {/* <TableBody>
            {data.map((data) => (
              <TableRow
                key={data.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {data.pizza_name}
                </TableCell>
                <TableCell align="right">{data.price}</TableCell>
              </TableRow>
            ))}
          </TableBody> */}
        </Table>
      </TableContainer>

      <Button variant="contained" color="primary" type="submit" onClick={handleClick}>Submit Order</Button>
    </>
  );

}






export default Checkout;