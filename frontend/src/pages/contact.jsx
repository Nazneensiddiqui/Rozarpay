import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const Contact=()=>{
  const MyCart = useSelector(state => state.mycart.cart);
const [input, setInput]=useState({})

  let totalAmount=0;
  let myProImg="";
   let myProList="";
  const Data = MyCart.map((key) => {
      totalAmount += key.price * key.qnty;
      myProImg=key.image;
      myProList+=key.description+", ";
     return (
        <>
          <tr key={key.id}>
          <td> <img src={key.image} width="100" height="100" /> </td>
          <td> {key.description} </td>
          <td> {key.price}</td>
            <td>{key.qnty * key.price}</td>
       </tr>
        </>
      )
    })

    const handleInput=(e)=>{
      let name=e.target.name;
      let value=e.target.value;
      setInput(values=>({...values , [name]:value}))
      console.log(input)
     }
  

//***************Razorpay********************************** */

const initPay = (data) => {
  const options = {
    key : "rzp_test_w8SqaqpLZuusnD",
    amount: data.amount,
    currency: data.currency,
    name: myProList,
    description: "Test",
    image:myProImg,
    order_id: data.id,
          handler: async (response) => {
            try {
              const verifyURL = "http://localhost:8100/api/payment/verify";
              const {data} = await axios.post(verifyURL,response);
            } catch(error) {
              console.log(error);
            }
          },
          theme: {
            color: "#3399cc",
          },
        };
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
        };


    const handlePay = async () => {
        try {
          const orderURL = "http://localhost:8100/api/payment/orders";
              const { data } = await axios.post(orderURL,{amount: totalAmount, currency: "INR",name:input.name,
                product:myProList,email:input.email,address:input.add,city:input.city, contact:input.contact, image:myProImg
               });
          console.log(data);
          initPay(data.data);
        } catch (error) {
          console.log(error);
        }
      };

    return(
        <>
      <div style={{width:"40%", margin:"auto", marginTop:"30px", marginBottom:"20px"}}>
           <Form.Group className="mb-3" controlId="formBasicEmail"  >
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="text" name="name" onChange={handleInput} />
        <Form.Label>Enter City</Form.Label>
        <Form.Control type="text" name="city" onChange={handleInput} />
        <Form.Label>Enter address</Form.Label>
        <Form.Control type="email" name="email" onChange={handleInput}/>
        <Form.Label>Contact No.</Form.Label>
        <Form.Control type="number" name="contact" onChange={handleInput}/>
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text" name="add" onChange={handleInput} />
       </Form.Group>
      <Button variant="primary" style={{width:"200px", marginLeft:"200px"}}
      onClick={handlePay}> Submit</Button>

          
        </div>
        </>
    )
}
export default Contact