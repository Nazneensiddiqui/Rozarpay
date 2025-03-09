const express=require("express")
const route=express.Router()
const CusControler=require("../Controlers/CostomerController")
route.get("/display", CusControler.CustomerDisplay)

module.exports=route