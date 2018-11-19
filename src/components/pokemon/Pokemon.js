import React, { Component, Fragment } from 'react';
import { getPokemon, getAbilities } from '../../services/pokemonApi';
import styles from './Pokemon.css';
import Pageable from '../paging/Paging';

export default class Pokemons extends Component {
  state = {
    loading: false,
    currentPage: 1,
    totalPages: 1,
    ability: '',
    abilities: [],
    pokemons: []
  };

  fetchPokemon = () => {
    const { currentPage, ability } = this.state;
    this.setState({ loading: true, pokemons: [] }, () => {
      getPokemon(currentPage, { ability } )
        .then(res => {
          this.setState({
            pokemons: res.results,
            loading: false
          })
        });
    });
  }

  componentDidMount() {
    getAbilities().then(abilities => this.setState({abilities}));
    this.fetchPokemon();
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.currentPage !== this.state.currentPage ||
      prevState.ability !== this.state.ability) {
      this.fetchPokemon();
    }
  }

  handlePageUpdate = page => {
    this.setState({ currentPage: page });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { loading, currentPage, totalPages, ability, abilities, pokemons } = this.state;

    const abilityOptions = abilities.map(ability => {
      return <option key={ability} value={ability}>{ability}</option>;
    });

    const pokemonComponents = pokemons.map(pokemon => {
      return <Pokemon key={pokemon.id}
      name={pokemon.name}/>;
    });

    return (
      <Fragment>
        <div className={styles.container}>
        <label className={styles.label}>
          Select Abilities
        </label>
        <select name="ability" defaultValue={ability} onChange={this.handleChange}>
          {abilityOptions}
        </select>
        </div>

        <div className={styles.pageView}>
        <h3>Page view</h3>
        <Pageable currentPage={currentPage}
          updatePage={this.handlePageUpdate}
          totalPages={totalPages} />
        </div>

      {loading && <img className={styles.loader} src="https://www.jqueryscript.net/images/jQuery-Animated-Loading-Button-GoButton.jpg" />}
        <div>
          <h1>Pokemon List</h1>
          <ol>{pokemonComponents}</ol>
        </div>
        </Fragment>
    );
  }
}

const Pokemon = ({ name }) => {
  return (
  <div>
      <li>{name}</li>
  </div>)
};
