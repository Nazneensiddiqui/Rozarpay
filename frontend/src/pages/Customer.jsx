import axios from "axios";
import { useEffect, useState } from "react"
import Table from 'react-bootstrap/Table';

const Customer=()=>{
    const[myData , setMyData]=useState([])

    const LoadData=async()=>{
 let api="http://localhost:8100/customer/display";
try {
    const response=await axios.get(api)
    console.log(response.data)
    setMyData(response.data)
} catch (error) {
    console.log(console.error()
    )
}
} 

useEffect(()=>{LoadData()},[])

const ans=myData.map((key)=>{
    return(
        <>
        <tr>
          <td><img src={key.myProImg} width={100} height={100}/></td>
          <td>{key.product}</td>
            <td>{key.name}</td>
            <td>{key.contact}</td>
            <td>{key.email}</td>
            <td>{key.address}</td>
            <td>{key.city}</td>
           <td>{key.amount}</td>
         <td>{key.currency}</td>
 </tr>
        </>
    )
})

return(
        <>
      <h4>Customer Detail</h4>  
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
        <th>Product</th>
          <th> Name</th>
          <th> Contact</th>
          <th> Email</th>
          <th> Address </th>
          <th> City </th>
          <th> Amount </th>
          <th> Currency </th>
        </tr>
      </thead>
      <tbody>
        {ans}
        </tbody>
        </Table>
        </>
    )
}
export default Customer