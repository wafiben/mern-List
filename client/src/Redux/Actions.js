import { GET_ALL_USERS, GET_ONE_USER } from "./Types";
import axios from "axios";
export const getAllUsers = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:8000/user/");
    dispatch({ type: GET_ALL_USERS, payload: response.data.users });
  } catch (error) {
    console.log("error");
  }
};
export const getOneUser = (id, navigate) => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:8000/user/${id}`);
    dispatch({ type: GET_ONE_USER, payload: response.data.user });
    navigate("/detailUser");
  } catch (error) {
    alert("ther is an error");
  }
};
export const deleteUser = (id, navigate) => async (dispatch) => {
  try {
    const response = await axios.delete(`http://localhost:8000/user/${id}`);
    alert(response.data.msg);
    navigate("/");
  } catch (error) {
    console.log("error");
  }
};
export const updateUser = (id, userInfo,nav) => async (dispatch) => {
  try {
    const response = await axios.put(
      `http://localhost:8000/user/${id}`,
      userInfo
    );
    nav('/')
  } catch (error) {
    console.log("error");
  }
};
export const addUser = (user, navigate) => async (dispatch) => {
  try {
    const response = await axios.post("http://localhost:8000/user/", user);
    navigate("/");
  } catch (error) {
    console.log("error");
  }
};
