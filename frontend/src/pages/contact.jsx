import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Contact=()=>{
  const MyCart = useSelector(state => state.mycart.cart);

  let totalAmount=0;
  const Data = MyCart.map((key) => {
      totalAmount += key.price * key.qnty;
     return (
        <>
          <tr key={key.id}>
            <td>{key.qnty * key.price}</td>
          </tr>
 </>
      )
    })
  

//***************Razorpay********************************** */
    const initPay = (data) => {
        const options = {
          key : "rzp_test_w8SqaqpLZuusnD", //ye tumko milegi key razarpay
          amount: data.amount,
          currency: data.currency,
          description: "Test",
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
              const { data } = await axios.post(orderURL, { amount: totalAmount , currency: "INR" });
          console.log(data);
          initPay(data.data);
        } catch (error) {
          console.log(error);
        }
      };

    return(
        <>
      <div style={{width:"40%", margin:"auto", marginTop:"30px", marginBottom:"20px"}}>
           <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Label>Enter City</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Label>Enter address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
       </Form.Group>
      <Button variant="primary" style={{width:"200px", marginLeft:"200px"}}
      onClick={handlePay}> Submit</Button>

          
        </div>
        </>
    )
}
export default Contact