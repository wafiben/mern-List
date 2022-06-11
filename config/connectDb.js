const mongoose = require("mongoose");
const URL ="mongodb+srv://wafi:54900777@cluster0.eoklw.mongodb.net/?retryWrites=true&w=majority";
const connect = async () => {
  try {
    await mongoose.connect(URL);
    console.log("sucessfully connected to db");
  } catch {
    console.log("failed connection to database");
  }
};
module.exports=connect
