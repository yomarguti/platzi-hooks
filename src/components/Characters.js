import React, { useState, useReducer, useCallback, useMemo, useRef } from 'react';
import CharacterItem from './CharacterItem';

import Search from './Search';
import useCharacters from '../hooks/useCharacters';

const initialState = { favorites: [] };

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    default:
      throw new Error('Action not identifyed');
  }
};

const Characters = () => {
  const [search, setSearch] = useState('');
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
  const searchInput = useRef(null);

  const characters = useCharacters('https://rickandmortyapi.com/api/character');

  console.log('COMPONENT RENDERED!!!');

  const searchHandler = useCallback(() => {
    setSearch(searchInput.current.value);
  }, []);

  const addFavoriteHandler = useCallback((character) => {
    dispatch({ type: 'ADD', payload: character });
  }, []);

  const filteredCharacters = useMemo(
    () =>
      characters.filter((character) => {
        return character.name.toLowerCase().includes(search.toLowerCase());
      }),
    [characters, search]
  );

  return (
    <div className="flex flex-col px-2 pt-4">
      <h2 className="font-bold text-4xl pb-4">Characters</h2>
      <Search search={search} searchHandler={searchHandler} searchInput={searchInput} />
      <div>
        <span className="font-bold text-2xl">Favorites: </span>{' '}
        <span>{favorites.favorites.map((item) => item.name).join(', ')}</span>
      </div>
      <div className="w-full flex flex-col">
        <div className="flex flex-col md:flex-row flex-wrap">
          {filteredCharacters.map((character) => {
            return (
              <CharacterItem
                key={character.id}
                itemData={character}
                addToFavorite={() => addFavoriteHandler(character)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Characters;
