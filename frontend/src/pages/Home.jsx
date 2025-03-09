import Carousel from 'react-bootstrap/Carousel';
import bn from "../images/Refurbished_Mobile_Phones_1.webp"

const Home=()=>{
    
    return(
        <>
   <div>
      <Carousel>
      <Carousel.Item>
     <img src={bn} width="1500px" height="400px"/>
        </Carousel.Item>
     </Carousel>
    </div>
        </>
    )
}
export default Home;