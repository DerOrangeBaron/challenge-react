import React from "react";
import { Image } from "react-bootstrap";

function CharacterCardComponent({ character }) {
  return (
    <div>
      <Image
        roundedCircle="true"
        src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
      ></Image>
      <h3 className="mt-3">Card Title</h3>
    </div>
  );
}

export default CharacterCardComponent;
