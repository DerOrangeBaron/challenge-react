import { useEffect } from "react";
import { Image, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { selectCharacter, getCharacter } from "../reducers/characterSlice";

function CharacterPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const character = useSelector(selectCharacter);

  useEffect(() => {
    async function dis() {
      await dispatch(getCharacter(id));
    }
    dis();
  }, [dispatch, id]);

  const borderColor =
    character.status === "Dead"
      ? "red"
      : character.status === "Alive"
      ? "green"
      : "";
  const subject =
    character.gender === "Female"
      ? ["She", "her"]
      : character.gender === "Male"
      ? ["He", "his"]
      : ["It", "it"];

  const toBe = character.status === "Dead" ? "was" : "is";

  return (
    <>
      <div
        className="bg-image"
        style={{ backgroundImage: `url(${character.image})` }}
      >
        <div class className="blur character-header">
          <h2 className="title">
            <span>{character.name}</span>
          </h2>
        </div>
      </div>
      <div className="avatar-container">
        <Image
          roundedCircle="true"
          src={character.image}
          className="avatar"
          style={{ borderColor }}
          alt={character.name}
          title={`${character.name} - status: ${character.status}`}
        ></Image>
      </div>
      <Container className="text-left mt-5">
        <p>
          {character.name && (
            <>
              {`The character `}
              <strong>{character.name}</strong>
            </>
          )}
          {character.species && (
            <>
              {` ${toBe} a `}
              <strong>{character.species}</strong>
            </>
          )}
          .
        </p>
        <p>
          <strong>{subject[0]}</strong> {` ${toBe} `}
          {character.Type && `a ${character.Type}`}
          {character.origin && character.origin && (
            <>
              {`from `}
              <strong>{character.origin.name}</strong>
            </>
          )}
          .
        </p>
        {character.episode && (
          <p>
            {" "}
            {`You could find ${character.episode.length} episode${
              character.episode.length > 1 ? "s" : ""
            } where ${subject[0].toLocaleLowerCase()} participate`}
          </p>
        )}
      </Container>
    </>
  );
}

export default CharacterPage;
