import React, { useState } from "react";
import { useSelector } from "react-redux";
import { deleteUser } from "../Redux/Actions";
import { useDispatch } from "react-redux";

import { updateUser } from "../Redux/Actions";
import {useNavigate} from 'react-router-dom'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const styleContent = {
  margin: "auto",
  boxShadow: "10px 10px 10px 10px gray",
  width: "400px",
  textAlign: "center",
};
const styleButton = {
  border: "none",
  boxShadow: "10px 10px 10px 10px white",
  marginBottom: "10px",
};
function UserDetails() {
  const nav=useNavigate()
  const [show, setShow] = useState(false);
  const [updatedUser, setUpdateUser] = useState({
    userName: "",
    email: "",
    age: "",
  });

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);
  const handleClick = () => {
    if (window.confirm("Are you sure you want delete this user")) {
      dispatch(deleteUser(user._id, nav));
    }
  };
  const yep = () => {
    show ? setShow(false) : setShow(true);
  };
  const handleChange = (e) => {
    setUpdateUser({ ...updatedUser, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(user._id, updatedUser,nav));
    setUpdateUser({ userName: "", email: "", age: ""});
  };
  return (
    <>
      <div style={styleContent}>
        <h1>{user && user.userName}</h1>
        <h1>{user && user.email}</h1>
        <h1>{user && user.age}</h1>
        <button style={styleButton} onClick={handleClick}>
          Delete user
        </button>
        <br />
        <button style={styleButton} onClick={yep}>
          update user
        </button>
      </div>
      {show && (
        <Form style={{ width: "25%", margin: "auto" }} onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>UserName</Form.Label>
            <Form.Control
              onChange={handleChange}
              type="text"
              placeholder={user.userName}
              value={updatedUser.userName}
              id="userName"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={handleChange}
              type="email"
              placeholder={user.email}
              value={updatedUser.email}
              id="email"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>age</Form.Label>
            <Form.Control
              onChange={handleChange}
              type="text"
              placeholder={user.age}
              value={updatedUser.age}
              id="age"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      )}
    </>
  );
}

export default UserDetails;
