import React from "react";
import { Image } from "react-bootstrap";

function CharacterCardComponent({ character }) {
  return (
    <div className="mb-5">
      <Image
        roundedCircle="true"
        src={character.image}
        className="w-80"
      ></Image>
      <h3 className="mt-3">{character.name}</h3>
    </div>
  );
}

export default CharacterCardComponent;
