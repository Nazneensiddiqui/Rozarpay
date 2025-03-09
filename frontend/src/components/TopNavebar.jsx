import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaShoppingCart } from "react-icons/fa";

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const TopNavbar=()=>{
const MyCart=useSelector(state=>state.mycart.cart)
const navigate= useNavigate();

const cartPage=()=>{
  navigate("/cart");
 }

  const cartLen= MyCart.length;
    return(
        <>
        <div style={{position:"sticky", top:"0", zIndex:"10"}}>
         <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">E-kart</Navbar.Brand>
          <Nav className="me-auto" style={{marginLeft:"100px"}}>
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="product">Product</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            {/* //Cart length */}
           
<div  style={{color:"white" , marginLeft:"500px"}}>
            {cartLen > 0 && ( <span style={{ fontSize: "14px", color:"white"}}>{cartLen}</span> )}
            <FaShoppingCart style={{color:"white", fontSize:"30px",paddingTop:"10px", }} onClick={cartPage}/>
            </div>
          </Nav>
        </Container>
      </Navbar>
      </div>

        </>
    )
}
export default TopNavbar