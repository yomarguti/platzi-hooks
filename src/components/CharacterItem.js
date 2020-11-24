import React from 'react';

const CharacterItem = ({ itemData }) => {
  const { name, image, species, type, location } = itemData;

  const sliceString = (str, limit) => {
    if (str.length > limit) {
      return `${str.slice(0, limit)}...`;
    }

    return str;
  };

  return (
    <div className="border border-gray-500 rounded flex flex-col w-full sm:max-w-56 md:w-52 p-4 shadow-md md:mx-4 my-5 cursor-pointer">
      <h3 className="font-bold text-xl pb-2">{name}</h3>
      <img src={image} alt={name} className="rounded" />
      <ul className="text-sm pt-3">
        <li>
          <span className="font-bold">Species: </span>
          {species}
        </li>
        <li>
          <span className="font-bold">Type: </span>
          {type ? sliceString(type, 10) : 'N/A'}
        </li>
        <li>
          <span className="font-bold">Location: </span>
          {location.name ? sliceString(location.name, 10) : ''}
        </li>
      </ul>
    </div>
  );
};

export default CharacterItem;
