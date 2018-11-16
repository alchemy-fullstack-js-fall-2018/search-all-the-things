import React from 'react';
import PropTypes from 'prop-types';

export const Query = ({ updateQuery }) => {

  const rarityOptions = ['Times', 'Courier', 'Arial'].map(font => {
    return <option key={font} value={font}>{font}</option>
  });

  return (
    <form onSubmit={updateQuery}>
      <fieldset>
        <legend>Options</legend>
        <label htmlFor="header">Header: </label>
        <input name="header" placeholder="enter header here" value={header} onChange={this.onChange} />


        <label htmlFor="footer">Footer: </label>
        <input name="footer" placeholder="enter footer here" value={footer} onChange={this.onChange} />

        <label htmlFor="font">Font family: </label>
        <select name="font" defaultValue={font} onChange={this.onChange}>
          {fontOptions}
        </select>
        <p>{font}</p>

        <label htmlFor="color">Font color: </label>
        <input name="color" value={color} type="color" onChange={this.onChange} />
        <p>{color}</p>

        <label htmlFor="imageURL">Image URL</label>
        <input name="imageURL" type="text" onChange={this.onChange} /><br />

        <label htmlFor="imageUpload"></label>
        <input name="imageUpload" type="file" accept="image/*" onChange={this.onImageUpload} />
        <p>{imageURL}</p>
        <button type="submit">Create Image</button>
      </fieldset>
    </form>
  );



};

Query.PropTypes = {
  updateQuery: PropTypes.func.isRequired
};
