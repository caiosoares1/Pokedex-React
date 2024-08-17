import React from 'react';
import pokemons from '../data/pokedex';


export default function PokemonCard({ pokemon = pokemons }) {
    const img = '/img/'+ pokemon.name + '.png';
    return (
        <>
        
            <div
                class="pokemon"
                data-name="Bulbasaur"
                data-type="grass,poison"
                tabindex="1"
            >
                <figure class="pokemon-figure">
                    <img src={img} alt={pokemon.name} />
                </figure>
                <section class="pokemon-description">
                    <span class="pokemon-id">{pokemon.id}</span>
                    <h1 class="pokemon-name">{pokemon.name}</h1>
                    <div class="pokemon-types">
                        <span className={`pokemon-type background-${pokemon.type[0]}`} style={{backgroundColor: pokemon.type[0]}}>{pokemon.type[0]}</span>
                        {pokemon.type[1] ? <span className={`pokemon-type background-${pokemon.type[1]}`}>{pokemon.type[1]}</span> : ''}
                        
                    </div>
                </section>
                <section class="pokemon-stats">
                    <div class="stat-row">
                        <div>hp</div>
                        <div class="stat-bar">
                            <div class="stat-bar-bg" style={{width: '18%'}}>45</div>
                        </div>
                    </div>
                    <div class="stat-row">
                        <div>attack</div>
                        <div class="stat-bar">
                            <div class="stat-bar-bg" style={{width: '19.'}}>49</div>
                        </div>
                    </div>
                    <div class="stat-row">
                        <div>defense</div>
                        <div class="stat-bar">
                            <div class="stat-bar-bg" style={{width: '19.'}}>49</div>
                        </div>
                    </div>
                    <div class="stat-row">
                        <div>sp-atk</div>
                        <div class="stat-bar">
                            <div class="stat-bar-bg" style={{width: '26%'}}>65</div>
                        </div>
                    </div>
                    <div class="stat-row">
                        <div>sp-def</div>
                        <div class="stat-bar">
                            <div class="stat-bar-bg" style={{width: '26%'}}>65</div>
                        </div>
                    </div>
                    <div class="stat-row">
                        <div>speed</div>
                        <div class="stat-bar">
                            <div class="stat-bar-bg" style={{width: '18%'}}>45</div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}