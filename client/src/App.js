import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import AddUserForm from "./Components/AddUserForm";
import UserDetails from "./Components/UserDetails";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addUser" element={<AddUserForm />} />
        <Route path="/detailUser" element={<UserDetails />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
