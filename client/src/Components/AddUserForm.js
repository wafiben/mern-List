import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { addUser } from "../Redux/Actions";
import {useDispatch} from "react-redux";
import {useNavigate} from 'react-router-dom'
const styleForm = { width: "50%", margin: "auto" };
function AddUserForm() {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const [userInfo, setUserInfo] = useState({
    userName: "",
    email: "",
    age: "",
  });
  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.id]: e.target.value });
   
  };
 const handleSubmit=(event)=>{
    event.preventDefault();
    dispatch(addUser(userInfo,navigate));
    setUserInfo({
      userName: "",
      email: "",
      age: "",
    })

 }
  return (
    <Form style={styleForm} onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="userName"
          value={userInfo.userName}
          onChange={handleChange}
          id="userName"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={userInfo.email}
          onChange={handleChange}
          id="email"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Age</Form.Label>
        <Form.Control
          type="text"
          placeholder="Age"
          value={userInfo.age}
          onChange={handleChange}
          id="age"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default AddUserForm;
