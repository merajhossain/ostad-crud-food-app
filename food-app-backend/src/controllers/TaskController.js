const taskModel = require("../models/TaskModel");
exports.CreateTask =async (req, res) => {
    try{
        let email=req.headers['email'];
        let reqBody=req.body;
        reqBody.email=email;
        await taskModel.create(reqBody);
        res.json({status:"success",message:"Create Completed"})

    }catch (err) {
        res.json({status:"fail",message:err})
    }
}

exports.ReadTask =async (req, res) => {
    try{
        let email=req.headers['email'];
        let data=await taskModel.find({});
        res.json({status:"success",data:data})
    }catch (err) {
        res.json({status:"fail",message:err})
    }
}

exports.Test =async (req, res) => {
    try{
        res.json({status:"success",data:"this is demo"})
    }catch (err) {
        res.json({status:"fail",message:err})
    }
}

exports.UpdateTask =async (req, res) => {
    try{
        let {id}=req.params;
        let reqBody=req.body;
        console.log('reqBody', id);
        await taskModel.updateOne({_id:id}, reqBody);
        res.json({status:"success", message:"Update Completed"})
    }catch (err) {
        res.json({status:"fail",message:err})
    }
}

exports.DeleteTask =async (req, res) => {
    try{
        let {id}=req.params;
        await taskModel.deleteOne({_id:id});
        res.json({status:"success",message:"Delete Completed"})
    }catch (err) {
        res.json({status:"fail",message:err})
    }
}
