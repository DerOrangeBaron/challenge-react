import React from "react";
import "./App.css";
import MainView from "./screens/MainView";
import HomePage from "./screens/HomePage";
import CharacterPage from "./screens/CharacterPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainView>
              <HomePage />
            </MainView>
          }
        ></Route>
        <Route
          path="/character/:id"
          element={
            <MainView>
              <CharacterPage />
            </MainView>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
