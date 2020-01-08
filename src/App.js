import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import Character from "./Components/Character";
import Loading from "./Components/Loading";

function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [characterCopy, setCharacterCopy] = useState([]);
  const [page, setPage] = useState(1);

  const inputRef = useRef(null);

  useEffect(() => {
    getCharacters(page);
    inputRef.current.focus();
  }, [page]);

  const getCharacters = async (page = 1) => {
    const res = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}`
    );
    const data = await res.json();
    setCharacters(data.results);
    setCharacterCopy(data.results);
    setLoading(false);
  };

  const searchCharacters = e => {
    const text = e.target.value.trim().toLowerCase();
    if (text.length === 0) {
      setCharacters(characterCopy);
      return;
    }
    const search = characters.filter(character =>
      character.name.toLowerCase().match(text)
    );
    setCharacters(search);
  };

  const changePage = e => {
    const { name } = e.target;
    if (page >= 1) {
      if (name === "next") {
        setPage(page + 1);

        return;
      }
      if (page > 1) {
        setPage(page - 1);
      }
    }
  };

  return (
    <>
      <div className="input-container">
        <input
          type="text"
          placeholder="Search characters..."
          onChange={searchCharacters}
          ref={inputRef}
        />
      </div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="character">
            {characters.map(character => (
              <Character character={character} key={character.id} />
            ))}
          </div>
          <div className="buttons">
            <button onClick={changePage} name="prev" className="prev">
              {" "}
              {"<"}{" "}
            </button>
            <button onClick={changePage} name="next" className="next">
              {" "}
              {">"}{" "}
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default App;
