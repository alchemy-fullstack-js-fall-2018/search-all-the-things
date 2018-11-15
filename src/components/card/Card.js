import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ result }) => {
  const { name, types, rarity, imageUrl } = result;

  return (
    <li>
      <h3>Name: {name}</h3>
      <p>Types: {types}</p>
      <p>Rarity: {rarity}</p>
      <img src={imageUrl} />
    </li>
  );

};

Card.propTypes = {
  result: PropTypes.object.isRequired
};

export default Card;
