const express = require("express");
const app = express();
const errorMiddleware= require("./middlewear/error");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const dotenv = require('dotenv');
const path = require("path");

//Config

if(process.env.NODE_ENV !=='PRODUCTION'){
    dotenv.config({path:'backend/config/config.env'});
}

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

//Route Imports
const property = require("./routes/propertyRoute");
const user = require("./routes/userRoute"); 
const payment = require("./routes/paymentRoute"); 

app.use("/api/v1",property);
app.use("/api/v1",user);
app.use("/api/v1",payment);

app.use(express.static(path.join(__dirname,"../frontend/build")));

app.get("*", (req,res)=> {
    res.sendFile(path.resolve(__dirname,"../frontend/build/index.html"))
})

//Middleware for Errors
app.use(errorMiddleware);

module.exports = app;