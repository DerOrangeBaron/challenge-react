import React from "react";
import HomePage from "./HomePage";
import HeaderComponent from "../components/HeaderComponent";

function MainView({ children }) {
  return (
    <div className="App">
      <HeaderComponent title="Rick & Morty" />
      {children}
    </div>
  );
}

export default MainView;
