import React, { Component, Fragment } from 'react';

export default class People extends Component {
  state = {
    currentPage: 1,
    totalPage: 1,
    people: []
  };
  render() {
    const { person }
  }
}
return (
  <Fragment>
    <div className=(styles.people)>
      { peopleComponents}
    </div>
  </Fragment>
);

const Person = ({ name }) => {
  return <div>
    <h3>{name}</h3>
  </div>
}