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





function Checkout() {

  const history = useHistory();

  const handleClick = () => {
    history.push('/ThankYou');
  }


  const data = [
    {
      customer_name: '',
      address: '',
      city: '',
      state: '',
      type: '',
      pizza_name: '',
      price: 0,
      total: 0
    }
  ]

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Pizza</TableCell>
              <TableCell align="right">Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((data) => (
              <TableRow
                key={data.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {data.pizza_name}
                </TableCell>
                <TableCell align="right">{data.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Button variant="contained" color="primary" type="submit" onClick={handleClick}>Submit Order</Button>
    </>
  );

}






export default Checkout;