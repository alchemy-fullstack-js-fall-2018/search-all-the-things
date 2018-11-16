import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ result }) => {
  const { name, types, rarity, imageUrl } = result;

  return (
    <li>
      <img src={imageUrl} />
      <h3>{name}</h3>
      <p>Types: {types}</p>
      <p>Rarity: {rarity}</p>
    </li>
  );

};

Card.propTypes = {
  result: PropTypes.object.isRequired
};

export default Card;
