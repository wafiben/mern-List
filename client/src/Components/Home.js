import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardUser from "./CardUser";
import { getAllUsers } from "./../Redux/Actions";

function Home() {
  const { users } = useSelector((state) => state);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  },[]);
  const styleOfHomeContent = {
    display: "flex",
    justifyContent: "space-around",
  };
  return <div style={styleOfHomeContent}>
    {users ? users.map((elt)=>(<CardUser
    user={elt}
     key={elt.id}/>)):'no data to show'}
  </div>;
}

export default Home;
