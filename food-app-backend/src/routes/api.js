const express = require('express');
const AuthMiddleware = require("../middleware/AuthMiddleware");
const UserController = require("../controllers/UserController");
const TaskController = require("../controllers/TaskController");

const router = express.Router();

//registration
router.post("/registration", UserController.UserRegistration);
router.post("/login", UserController.UserLogin);
router.get("/profileView/:userid", AuthMiddleware, UserController.GetProfile);  
router.post("/profileUpdate/:userid", AuthMiddleware, UserController.UpdateProfile);  
//task
router.post("/create", AuthMiddleware, TaskController.CreateTask);
router.get("/read", AuthMiddleware, TaskController.ReadTask);
router.get("/test", TaskController.Test);
router.post("/update/:id",AuthMiddleware,TaskController.UpdateTask);
router.get("/delete/:id",AuthMiddleware,TaskController.DeleteTask);

module.exports = router;