import React from 'react';
import PropTypes from 'prop-types';

const Query = ({ query, onQueryItemChange }) => {

  const rarityOptions = ['common', 'uncommon', 'rare', 'mythic rare'].map(option => {
    return <option key={option} value={option}>{option}</option>;
  });

  return (
    <form>
      <fieldset>
        <legend>Options</legend>
        {/* <label htmlFor="header">Rarity: </label>
        <input name="header" placeholder="enter header here" value={header} onChange={this.onChange} />


        <label htmlFor="footer">Footer: </label>
        <input name="footer" placeholder="enter footer here" value={footer} onChange={this.onChange} /> */}

        <label htmlFor="rarity">Rarity: </label>
        <select name="rarity" defaultValue={query.rarity} onChange={onQueryItemChange}>
          {rarityOptions}
        </select>

        {/* <label htmlFor="color">Font color: </label>
        <input name="color" value={color} type="color" onChange={this.onChange} />
        <p>{color}</p>

        <label htmlFor="imageURL">Image URL</label>
        <input name="imageURL" type="text" onChange={this.onChange} /><br />

        <label htmlFor="imageUpload"></label>
        <input name="imageUpload" type="file" accept="image/*" onChange={this.onImageUpload} />
        <p>{imageURL}</p> */}
      </fieldset>
    </form>
  );
};

Query.propTypes = {
  query: PropTypes.object.isRequired,
  onQueryItemChange: PropTypes.func.isRequired
};

export default Query;
