import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
const LinkStyle = { textDecoration: "none", color: "white" };
const divStyle = { display: "flex", justifyContent: "space-around" };
const styleLinkHome = { ...LinkStyle, paddingLeft: "50px" };
function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav style={divStyle}>
          <h1>
          <Link to="/" style={styleLinkHome}>
            Home-
          </Link>
          </h1>
          <h1>
          <Link to="/addUser" style={LinkStyle}>
            addUser
          </Link>
          </h1>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
