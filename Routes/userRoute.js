const express = require("express");
const router = express.Router();
const {
  getAllusers,
  addUser,
  getOneUser,
  modifyUser,
  deleteUser
} = require("../Controllers/userController.js");
router.get("/", getAllusers);
router.post("/", addUser);
router.get("/:id", getOneUser);
router.put("/:id", modifyUser);
router.delete("/:id", deleteUser);
module.exports = router;
