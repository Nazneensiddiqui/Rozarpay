// // const route = require("express").Router();
// // const Razorpay = require("razorpay");
// // const crypto = require("crypto");

// // //Creating Order



// // route.post("/orders",(req,res) => {
// //     console.log(req.body)
// //  try {
// //            const instance = new Razorpay({
// //             key_id: process.env.KEY_ID,
// //             key_secret: process.env.KEY_SECRET,
// //         });

// //         const options = {
// //             amount: req.body.amount * 100,
// //             currency:"INR",
// //             receipt:crypto.randomBytes(10).toString("hex"),
// //         }
// //         instance.orders.create(options,(error,order) => {
// //             if(error) {
// //                 console.log(error);
// //                 return res.status(500).json({message:"Something Went Wrong!"});
// //             }
// //             res.status(200).json({data:order});
// //         });

// //     } catch(error) {
// //         console.log(error);
// //         res.status(500).json({message:"Internal Server Error!"});
// //     }

// // });

// // //Verifying the payment
// // route.post("/verify",(req,res) => {
// //     try {
// //         const {
// //             razorpay_orderID,
// //             razorpay_paymentID,
// //             razorpay_signature } = req.body;
// //         const sign = razorpay_orderID + "|" + razorpay_paymentID;
// //         const resultSign = crypto
// //         .createHmac("sha256",process.env.KEY_SECRET)
// //         .update(sign.toString())
// //         .digest("hex");

// //         if (razorpay_signature == resultSign){
// //             return res.status(200).json({message:"Payment verified successfully"});
// //         }

// //     } catch(error) {
// //         console.log(error);
// //         res.status(500).json({message:"Internal Server Error!"});
// //     }
// // });

// // module.exports = route;


// const express = require("express");
// const Razorpay = require("razorpay");
// const crypto = require("crypto");
// require("dotenv").config();

// const route = express.Router();

// // 🟢 Creating Order
// route.post("/orders", async (req, res) => {
//     console.log("🟢 Received Order Request:", req.body);

//     try {
//         if (!req.body.amount) {
//             return res.status(400).json({ message: "Amount is required!" });
//         }

//         const instance = new Razorpay({
//             key_id: process.env.KEY_ID,
//             key_secret: process.env.KEY_SECRET,
//         });

//         const options = {
//             amount: req.body.amount * 100, // Amount in paise
//             currency: "INR",
//             receipt: crypto.randomBytes(10).toString("hex"),
//         };

//         console.log("🟢 Creating Razorpay Order with options:", options);

//         const order = await instance.orders.create(options);
//         console.log("✅ Razorpay Order Created:", order);

//         res.status(200).json({ data: order });

//     } catch (error) {
//         console.error("🔴 Razorpay Order Creation Error:", error);
//         res.status(500).json({ message: "Internal Server Error!", error });
//     }
// });

// // 🟢 Verifying the payment
// route.post("/verify", (req, res) => {
//     try {
//         console.log("🟢 Verifying Payment:", req.body);

//         const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
//         if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
//             return res.status(400).json({ message: "Invalid payment data!" });
//         }

//         const sign = razorpay_order_id + "|" + razorpay_payment_id;
//         const expectedSignature = crypto
//             .createHmac("sha256", process.env.KEY_SECRET)
//             .update(sign.toString())
//             .digest("hex");

//         console.log("🟢 Expected Signature:", expectedSignature);
//         console.log("🟢 Received Signature:", razorpay_signature);

//         if (razorpay_signature === expectedSignature) {
//             return res.status(200).json({ message: "✅ Payment verified successfully!" });
//         } else {
//             return res.status(400).json({ message: "❌ Payment verification failed!" });
//         }
//     } catch (error) {
//         console.error("🔴 Payment Verification Error:", error);
//         res.status(500).json({ message: "Internal Server Error!", error });
//     }
// });

// module.exports = route;


const CustomerModel=require("../Models/CustomerModel")
const router = require("express").Router();
const Razorpay = require("razorpay");
const crypto = require("crypto");

//Creating Order



router.post("/orders",async(req,res) => {
    console.log(req.body)
   const {amount,name,product, email,address, city, contact,currency, image}=req.body
      try {
const Customer= await CustomerModel.create({
    name:name,
    product:product,
    email:email,
    address:address,
    city:city,
    contact:contact,
    amount:amount,
    myProImg:image,
    currency:currency
    
})
      const instance = new Razorpay({
            key_id: process.env.KEY_ID,
            key_secret: process.env.KEY_SECRET,
        });

        const options = {
            amount: req.body.amount * 100,
            currency:"INR",
            receipt:crypto.randomBytes(10).toString("hex"),
        }
        instance.orders.create(options,(error,order) => {
            if(error) {
                console.log(error);
                return res.status(500).json({message:"Something Went Wrong!"});
            }
            res.status(200).json({data:order});
        });

    } catch(error) {
        console.log(error);
        res.status(500).json({message:"Internal Server Error!"});
    }

});

//Verifying the payment
router.post("/verify",async(req,res) => {
    try {
        const {
            razorpay_orderID,
            razorpay_paymentID,
            razorpay_signature } = req.body;
        const sign = razorpay_orderID + "|" + razorpay_paymentID;
        const resultSign = crypto
        .createHmac("sha256",process.env.KEY_SECRET)
        .update(sign.toString())
        .digest("hex");

        if (razorpay_signature == resultSign){
            return res.status(200).json({message:"Payment verified successfully"});
        }

    } catch(error) {
        console.log(error);
        res.status(500).json({message:"Internal Server Error!"});
    }
});

module.exports = router;