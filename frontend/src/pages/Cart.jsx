import { useSelector, useDispatch } from "react-redux";
import Table from 'react-bootstrap/Table';
import { FaPlusCircle } from "react-icons/fa";
import { FaCircleMinus } from "react-icons/fa6";
import { qntyInc, qntyDec,itemRemove } from "./CartSlice";

import { useNavigate } from "react-router-dom";


const Cart=()=>{
    const MyCart= useSelector(state=>state.mycart.cart);
    const dispatch=useDispatch();
 const navigate=useNavigate()
 
    
    const qtyIncrement=(id)=>{
          dispatch(qntyInc({id:id}));
     }
 
     const qtyDecrement=(id)=>{
       dispatch(qntyDec({id:id}))
  }
 
  const removeItem=(id)=>{
   dispatch(itemRemove({id:id}))
 }
 
 const process=()=>{
   navigate("/Contact")
 }
 
     let totalAmount=0;
     const Data=MyCart.map((key)=>{
       totalAmount+=key.price*key.qnty;
         return(
             <>
                <tr>
                 <td> <img src={key.image} width="100" height="100" /> </td>
                <td> {key.description} </td>
                 <td> {key.price}</td>
                 <td>
                     
                 <a href="#" onClick={()=>{qtyDecrement(key.id)}}>
                 <FaCircleMinus />
                 </a>
             
 
                 <span style={{marginLeft:'10px', marginRight:'10px', fontWeight:'bold'}}>
                 {key.qnty}
                 </span>
                     
                     
                     <a href="#" onClick={()=>{qtyIncrement(key.id)}}>
                     <FaPlusCircle />
                     </a>
                      
 
 
                 </td>
              <td> {key.qnty * key.price} </td>
 
                 <td>
                 
                 <button onClick={()=>{removeItem(key.id)}}>Remove 
                    </button>
 
                 </td>
                </tr>
             
             </>
         )
     })



    return(
        <>
        <div style={{marginTop:"100px"}}>
           <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
        <th>Description</th>
          <th> Price</th>
          <th> Quantity</th>
          <th> Total</th>
          <th> Remove </th>
        </tr>
      </thead>
      <tbody>
         {Data}
         <tr>
          <th>#</th>
          <th> </th>
          <th> </th>
          <th> Total Amount: </th>
          <th> {totalAmount}  </th>
          <th> </th>
        </tr>
        </tbody>
        </Table>
        </div>
        <center> 
          <button style={{width:"300px", height:"50px",backgroundColor:"black", color:"white", margin:"50px"}}
          onClick={()=>{process()}}
          >PROCESS TO PAY</button>
        </center>
        </>
    )
}
export default Cart