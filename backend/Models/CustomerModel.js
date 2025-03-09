const mongoose=require("mongoose")
const CustomerSchema= new mongoose.Schema({
    name:String,
    product:String,
    email:String,
    address:String,
    city:String,
    contact:Number,
    amount:Number,
    myProImg:String,
    currency:String,
    createdAt: {
        type: Date,
        default: Date.now, 
      },
   })
   module.exports=mongoose.model("customer" , CustomerSchema)