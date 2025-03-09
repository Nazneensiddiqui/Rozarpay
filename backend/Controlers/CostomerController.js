const CustomerModel=require("../Models/CustomerModel")

const CustomerDisplay=async(req,res)=>{
    const Customer= await CustomerModel.find()
    res.send(Customer)
    
}

module.exports={CustomerDisplay}