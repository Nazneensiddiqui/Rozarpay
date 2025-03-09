import {BrowserRouter , Routes, Route} from "react-router-dom"
import Layout from "./Layout";
import Home from "./pages/Home";
// import ProductsPage from "./pages/ProductPage";
import ProductList from "./pages/Productlist";
import Cart from "./pages/Cart";
import Contact from "./pages/contact";

const App=()=>{
  return(
    <>
<BrowserRouter>
<Routes>
  <Route path="/" element={<Layout/>}>
  <Route index element={<Home/>}/>
  <Route path="home" element={<Home/>}/>
  <Route path="product" element={<ProductList/>}/>
  <Route path="cart" element={<Cart/>}/>
  <Route path="contact" element={<Contact/>}/>

  </Route>
</Routes>
</BrowserRouter>

    </>
  )
}
export default App;