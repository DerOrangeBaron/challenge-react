import React from "react";
import { Row, Col } from "react-bootstrap";

function HomePage() {
  const characters = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <h2>List of characters</h2>
      {characters.map((ch, idx) => {
        if (idx % 3 !== 0) {
          return null;
        }
        const rowData = characters.slice(idx, idx + 3);
        return (
          <Row className="mt-5 pb-3">
            {rowData.map((character, idx2) => {
              return <Col key={`${idx}-${idx2}`}>{character}</Col>;
            })}
          </Row>
        );
      })}
    </>
  );
}

export default HomePage;
