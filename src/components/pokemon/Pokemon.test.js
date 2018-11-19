import React from 'react';
import Pokemons from './Pokemon';

describe('Pokemon test', () => {

  it('renders a list of Pokemon', () => {
    let pokemons = [];

    const pokemonComponents = pokemons.map(pokemon => {
      return <Pokemon key={pokemon.id}
      name={pokemon.name}/>;
    });

    const pokemonlist = new Pokemons({
      pokemonComponents: [
        'bulbasaur',
        'ivysaur',
        'venusaur',
        'charmander',
        'charmeleon',
        'charizard',
        'squirtle',
        'wartortle',
        'blastoise',
        'caterpie',
        'metapod',
        'butterfree',
        'pikachu',
        'raichu',
        'sandshrew',
        'sandslash',
        'nidoran-f',
        'nidorina'
      ]
    });
    expect(pokemonlist.render()).toMatchSnapshot();
  });

});
