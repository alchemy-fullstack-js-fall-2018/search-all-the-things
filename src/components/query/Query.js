import React from 'react';
import PropTypes from 'prop-types';

const Query = ({ query, onQueryItemChange }) => {

  const rarityOptions = ['', 'common', 'uncommon', 'rare', 'mythic rare']
    .map(option => {
      return <option key={option} value={option}>{option}</option>;
    });

  const typeOptions = ['', 'Artifact', 'Conspiracy', 'Creature', 'Enchantment', 'Instant', 'Land', 'Phenomenon', 'Plane', 'Planeswalker', 'Scheme', 'Sorcery', 'Tribal', 'Vanguard']
    .map(option => {
      return <option key={option} value={option}>{option}</option>;
    });

  return (
    <form>
      <fieldset>
        <legend>Options</legend>

        <label htmlFor="rarity">Rarity: </label>
        <select name="rarity" defaultValue={query.rarity} onChange={onQueryItemChange}>
          {rarityOptions}
        </select>

        <label htmlFor="type">Type: </label>
        <select name="type" defaultValue={query.type} onChange={onQueryItemChange}>
          {typeOptions}
        </select>

      </fieldset>
    </form>
  );
};

Query.propTypes = {
  query: PropTypes.object.isRequired,
  onQueryItemChange: PropTypes.func.isRequired
};

export default Query;
