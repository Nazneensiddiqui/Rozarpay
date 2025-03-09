import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import TopNavbar from "./components/TopNavebar";
import Footer from "./components/Footer";




const Layout=()=>{
    return(
      <>
      <Header/>
      <TopNavbar/>
      <Outlet/>
      <Footer/>

    
      </>
    )
  }
  export default Layout;