import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';



export default function AdminOrders() {
   
    const[orders,setorders]=React.useState([])
    const fetchorders=()=>{
        axios({
            url:"/api/order",
            method:"GET"
        }).then((response)=>{
            console.log(response)
            setorders(response.data)
        }).catch((error)=>console.log(error))
    }
    React.useEffect(()=>{
        fetchorders()
    },[])
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Time Order Placed</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Cost</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.customer_name}
              </TableCell>
              <TableCell align="right">{row.time.toString()}</TableCell>
              <TableCell align="right">{row.type}</TableCell>
              <TableCell align="right">{row.total}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
