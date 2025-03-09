 import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./CartSlice"
 const Store=configureStore({
    reducer:{
mycart:myReducer
    }
 })
 export default Store