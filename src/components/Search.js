import React, { Component, Fragment } from 'react';

export default class Search extends Component {
    state= {
      country: ''
    };


    render() {
      return (
        <form>
          <input name="country" type="text" value={this.country}></input>
          <button type="submit">Submit</button>
        </form>

      );
    }
}
