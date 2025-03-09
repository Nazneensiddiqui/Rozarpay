const express=require("express")
const app=express();
require("dotenv").config()
const cors=require("cors")

const port=process.env.PROT 
  const dbcon=process.env.DBCON 

const mongoose=require("mongoose")
const bodyParser=require("body-parser")

mongoose.connect(dbcon).then((res)=>{
    console.log("DB Conneced");
})

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


const paymentRoute=require("./Routes/Payment");

//payment Rezorpay
app.use("/api/payment/",paymentRoute); 

app.listen(port , ()=>{
    console.log(`server run on ${port}`)
})