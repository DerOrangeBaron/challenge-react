import React from "react";
import { Navbar, Container } from "react-bootstrap";

function HeaderComponent({ title }) {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">{title}</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default HeaderComponent;
