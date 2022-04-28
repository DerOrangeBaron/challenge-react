import React from "react";
import HomePage from "./HomePage";
import HeaderComponent from "../components/HeaderComponent";
import { Container } from "react-bootstrap";

function MainView() {
  return (
    <>
      <HeaderComponent title="Rick & Morty" />
      <Container className="pt-4">
        <HomePage></HomePage>
      </Container>
    </>
  );
}

export default MainView;
