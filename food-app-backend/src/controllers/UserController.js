const userModel = require("../models/UserModel");
const jwt = require('jsonwebtoken');

exports.UserRegistration=async (req, res) => {
    try {
       let reqBody = req.body;
       console.log('reqBody', reqBody);
       await userModel.create(reqBody);
       res.json({status : "success", message: "registration successfully"});
    } catch (error) {
        res.json({status:"fail", message:error});
    }
}

exports.UserLogin =async (req, res) => {
    try {
       let reqBody = req.body;
       let user = await userModel.find(reqBody);
       if (user.length > 0) {
           let Payload = {exp:Math.floor(Date.now()/1000)*(24*60*60), data:reqBody['email']};
           let token = jwt.sign(Payload, "123-xyz");
           res.json({status : "login success", message: "user found", token:token, id: user[0]._id});
       }else{
           res.json({status : "login fails", message: "user not found"});
       }
    } catch (error) {
        res.json({status:"login fail", message:error});
    }
}

exports.GetProfile =async (req, res) => {
    try{

        let email=req.headers['email'];
        let result=await userModel.find({email:email})
        res.json({status:"success",data:result})

    }catch (err) {
        res.json({status:"fail",message:err})
    }
}

exports.UpdateProfile =async (req, res) => {
    try{
        let email=req.headers['email'];
        let reqBody=req.body;
        console.log('reqBody', email);
        await userModel.updateOne({email:email},reqBody);
        res.json({status:"success",message:"Update Completed"})

    }catch (err) {
        res.json({status:"fail",message:err})
    }
}
