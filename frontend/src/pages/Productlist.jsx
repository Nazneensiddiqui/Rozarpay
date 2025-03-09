import React, { useState, useEffect, use } from "react";
import axios from "axios";
import { useDispatch } from 'react-redux';
import {AddToCart} from "./CartSlice"

import Carousel from 'react-bootstrap/Carousel';
import bn from "../images/Refurbished_Mobile_Phones_1.webp"

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const dispatch=useDispatch()

const loaddata=async()=>{
  let api = "https://dummyjson.com/products/category/smartphones"
try {
  const response= await axios.get(api)
  setProducts(response.data.products)
  console.log(products)
} catch (error) {
  console.log(r=error)
}
}

  useEffect(() => {
    loaddata()
  }, []);


  const ans= products.map((key)=>{
    return(
      <>
     <div>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={key.thumbnail}  />
      <Card.Body>
        <Card.Title>{key.title}</Card.Title>
        <Card.Text>
        {key.description}<br/>
        <strong>Price:</strong> ${key.price}
         
        </Card.Text>
        <Button variant="primary"onClick={()=>{dispatch(AddToCart({id:key.id, price:key.price, description:key.title, image:key.thumbnail, qnty:1}))}}>AddToCart</Button>
      </Card.Body>
    </Card>
   </div>  
      
      </>
    )
  })
  return (
    <>
     <div>
      <Carousel>
      <Carousel.Item>
     <img src={bn} width="1500px" height="400px"/>
        </Carousel.Item>
     </Carousel>
    </div>
    <div style={{  display: "flex",flexWrap: "wrap",  justifyContent:"space-around", margin:"50px", }}>
   {ans}
    </div>
    </>
  )
}


export default ProductList;