import { GET_ALL_USERS,GET_ONE_USER } from "./Types";
const initState = { user: {}, users: [] };
const Reducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return { ...state, users: action.payload };
      case GET_ONE_USER:
        console.log('gsgsgsgs',action.payload)
        return { ...state, user: {...action.payload} };
    default:
      return state;
  }
};
export default Reducer;
