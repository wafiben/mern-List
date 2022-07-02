const express = require("express");
const app = express();
const connect=require('./config/connectDb.js')
require("dotenv").config({ path: "./config/.env" });
const userRoute=require('./Routes/userRoute.js');
const cors =require('cors')
console.log(process.env.PORT);
//midelware global 
app.use(express.json())
app.use(cors());

const PORT =8000||process.env.PORT
app.listen(PORT, (e) => {
    if(e){
        console.log('error on server')
    }
    else{
        console.log(`server is running on port ${PORT}`);
    }
 
});
//connect db 
connect();
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
  });
app.use('/user',userRoute);
