const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
});
module.exports=mongoose.model('user',userSchema);
