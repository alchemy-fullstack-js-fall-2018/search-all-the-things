import React, { Component, Fragment } from 'react';
import { getPokemon } from '../../services/pokemonApi';
import styles from './Pokemon.css';
import Pageable from '../paging/Paging';

export default class Pokemon extends Component {
  state = {
    loading: false,
    currentPage: 1,
    totalPages: 1,
    effect: '',
    short_effect: '',
    pokemons: []
  };

  fetchPokemon = () => {
    const { currentPage, effect, short_effect } = this.state;
    this.setState({ loading: true, pokemons: [] }, () => {
      getPokemon(currentPage, { effect, short_effect })
        .then(res => {
          this.setState({
            totalPages: res.info.pages,
            pokemons: res.results,
            loading: false
          })
        });
    });
  }

  render() {
    const { loading, pokemons, effect, short_effect, currentPage, totalPages } = this.state;

    const pokemonComponents = pokemons.map(pokemon => {
      return <Pokemon key={pokemon.id}
      name={pokemon.name} />;
    });

    return (
      <Fragment>
        <select name="status" >

        </select>
    )

  }





}
