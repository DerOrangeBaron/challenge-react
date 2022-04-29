import React from "react";
import { Row, Col } from "react-bootstrap";
import CharacterCardComponent from "../components/CharacterCardComponent";
import { amountOfColumns } from "../config";

function HomePage() {
  const characters = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <h2>List of characters</h2>
      {characters.map((ch, idx) => {
        if (idx % amountOfColumns !== 0) {
          return null;
        }
        const rowData = characters.slice(idx, idx + amountOfColumns);
        return (
          <Row className="mt-5 pb-3">
            {rowData.map((character, idx2) => {
              return (
                <Col xs key={`${idx}-${idx2}`}>
                  <CharacterCardComponent character></CharacterCardComponent>
                </Col>
              );
            })}
          </Row>
        );
      })}
    </>
  );
}

export default HomePage;
