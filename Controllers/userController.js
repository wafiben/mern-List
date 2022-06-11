const User = require("../Models/User.js");
const getAllusers = async (req, res) => {
  const users = await User.find();
  try {
    res.status(200).json({ users });
  } catch {
    res.status(400).json({ msg: "failed to get all users" });
  }
};
const addUser = async (req, res) => {
  const user = req.body;
  const searchedUser = await User.findOne({ email: user.email });
  try {
    if (searchedUser) {
      res.status(401).json({ msg: "user already exist" });
    } else {
      const newUser = new User({
        userName: user.userName,
        email: user.email,
        age: user.age,
      });
      newUser.save();
      res.status(200).json({ msg: "user sucessfully added" });
    }
  } catch {
    res.status(400).json({ msg: "saving failed" });
  }
};
const getOneUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);
    res.status(200).json({ user });
  } catch {
    res.status(400).json({ msg: "failed to get oe user" });
  }
};
const modifyUser = async (req, res) => {
  const id = req.params.id;
  const user = req.body;
  try {
   await User.findByIdAndUpdate(id, user);
    res.status(200).json({msg:"user updated"})
  } catch {
    res.status(400).json({user:'update failed'})
  }
};
const deleteUser=async(req,res)=>{
    const id=req.params.id
    try{
         await User.findByIdAndDelete(id);
         const users=await User.find()
         res.status(200).json({msg:"user is sucessfully deleted",users})
    }
    catch{
        res.status(400).json({user:'delete failed'})
    }
}
module.exports = { getAllusers, addUser, getOneUser, modifyUser,deleteUser};
