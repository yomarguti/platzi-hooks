import React, { useState, useEffect } from 'react';
import CharacterItem from './CharacterItem';

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCharacters(data.results);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="flex flex-col px-2">
      <h2 className="mx-4 font-bold text-4xl">Characters</h2>
      <div className="w-full flex flex-col md:flex-row flex-wrap self-center">
        {characters.map((character) => {
          return <CharacterItem key={character.id} itemData={character} />;
        })}
      </div>
    </div>
  );
};

export default Characters;
