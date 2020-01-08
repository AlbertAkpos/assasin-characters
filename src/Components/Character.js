import React, { useState } from "react";
import Index from "./modal/Index";
import CharacterModal from "./modal/CharacterModal";

const Character = ({ character }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [currCharacter, setCurrCharacter] = useState({});

  const openModal = character => {
    setIsModalOpen(!isModalOpen);
  };

  const dissmissable = () => {
    setIsModalOpen(false);
  };

  const imgStyle = {
    background: `url(${character.image}) no-repeat`,
    backgroundSize: "cover",
    width: "250px",
    height: "250px"
  };

  let children;
  if (isModalOpen) {
    children = <CharacterModal character={character} />;
  }

  return (
    <>
      <Index visible={isModalOpen} dismiss={dissmissable} children={children} />

      <div className="character-container" onClick={() => openModal()}>
        <div className="img-container" style={imgStyle}>
          <div className="character-details">
            <h2>{character.name}</h2>
            <p>{character.id}: 18 - create when</p>
          </div>
        </div>
        <div className="character-more-details">
          <ul>
            <li>
              <span className="details-tag">STATUS: </span>{" "}
              <span className="details-value">{character.status}</span>
            </li>
            <li>
              <span className="details-tag">SPECIES: </span>{" "}
              <span className="details-value">{character.species}</span>
            </li>

            <li>
              <span className="details-tag">GENDER: </span>{" "}
              <span className="details-value">{character.gender}</span>
            </li>

            <li>
              <span className="details-tag">ORIGIN: </span>{" "}
              <span className="details-value">{character.origin.name}</span>
            </li>

            <li>
              <span className="details-tag">LAST LOCATION: </span>{" "}
              <span className="details-value">value</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Character;
