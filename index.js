const express = require("express");
const app = express();
const connect=require('./config/connectDb.js')
require("dotenv").config({ path: "./config/.env" });
const userRoute=require('./Routes/userRoute.js')
console.log(process.env.PORT);
//midelware global 
app.use(express.json())

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
app.use('/user',userRoute);
