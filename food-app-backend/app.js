
const express = require('express');
const  router = require('./src/routes/api');
const helmet = require('helmet');
const cors = require('cors');
const hpp = require('hpp');
const rateLimit  = require('express-rate-limit');
const mongoose = require('mongoose');


const app = new express;

app.use(cors());
app.use(helmet());
app.use(hpp());
app.use(express.json({limit : '20mb'}));
app.use(express.urlencoded({extended : true}));


const limiter = rateLimit({windowMs: 15 * 60 * 1000, max:3000});
app.use(limiter);
 
let mongodbUrl = 'mongodb://localhost:27017/taskManagement';
let OPTION={user:"", pass:"", autoIndex:true};

mongoose.connect(mongodbUrl, OPTION).then((res) => {
    console.log("database connected");
}).catch((err) => {
    console.log("something worng");
});


app.use('/api/', router);

app.use("*", (req, res) => {
    res.status(404).json({data:"not found"})
}); 



module.exports = app;