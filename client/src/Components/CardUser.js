import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { getOneUser } from "../Redux/Actions";
import { useNavigate } from 'react-router-dom';
import {useDispatch} from "react-redux"
function CardUser({ user }) {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  
  const { userName, email, age,id } = user;
const handleClick=()=>{
  dispatch(getOneUser(user._id,navigate))
  
}
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{userName}</Card.Title>
        <Card.Text>
          {email}
          <h3> age:{age}</h3>
        </Card.Text>
        <Button variant="primary" onClick={handleClick}>See Details</Button>
      </Card.Body>
    </Card>
  );
}

export default CardUser;
