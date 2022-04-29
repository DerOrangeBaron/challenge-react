import { useEffect } from "react";
import { Row, Col, Pagination } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { amountOfColumns } from "../config";
import CharacterCardComponent from "../components/CharacterCardComponent";

import {
  selectCharacters,
  getCharacters,
  selectPage,
  selectLoading,
} from "../reducers/characterSlice";

function HomePage() {
  const dispatch = useDispatch();
  const characters = useSelector(selectCharacters);
  const pageInfo = useSelector(selectPage);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    async function dis() {
      await dispatch(getCharacters(pageInfo.actualPage));
    }
    dis();
  }, [pageInfo.actualPage]);

  return (
    <>
      <h2 className="mb-5">List of characters</h2>
      {/* {characters.map((ch, idx) => {
        if (idx % amountOfColumns !== 0) {
          return null;
        }
        const rowData = characters.slice(idx, idx + amountOfColumns);
        return ( */}
      <Row>
        {characters.map((character, idx2) => {
          return (
            <Col md={4} key={`-${idx2}`}>
              <CharacterCardComponent
                character={character}
              ></CharacterCardComponent>
            </Col>
          );
        })}
      </Row>
      {/* ); */}
      {/* })} */}
    </>
  );
}

export default HomePage;
