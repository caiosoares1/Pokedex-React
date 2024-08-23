import React from 'react';
import pokemons from '../data/pokedex';


export default function PokemonCard({ pokemon = pokemons }) {
    const img = '/img/'+ pokemon.name + '.png';
    return (
        <>
        
            <div
                className="pokemon"
                dataname="Bulbasaur"
                dataype="grass,poison"
                tabIndex="1"
            >
                <figure className="pokemon-figure">
                    <img src={img} alt={pokemon.name} />
                </figure>
                <section className="pokemon-description">
                    <span className="pokemon-id">#{pokemon.id.toString().padStart(3, '0')}</span>
                    <h1 className="pokemon-name">{pokemon.name}</h1>
                    <div className="pokemon-types">
                        <span className={`pokemon-type background-${pokemon.type[0]}`} style={{backgroundColor: pokemon.type[0]}}>{pokemon.type[0]}</span>
                        {pokemon.type[1] ? <span className={`pokemon-type background-${pokemon.type[1]}`}>{pokemon.type[1]}</span> : ''}
                        
                    </div>
                </section>
                <section className="pokemon-stats">
                    <div className="stat-row">
                        <div>hp</div>
                        <div className="stat-bar">
                            <div className="stat-bar-bg" style={{width: `${pokemon.stats.hp}%`, maxWidth:'100%'}}>{pokemon.stats.hp}</div>
                        </div>
                    </div>
                    <div className="stat-row">
                        <div>attack</div>
                        <div className="stat-bar">
                            <div className="stat-bar-bg" style={{width: `${pokemon.stats.attack}%`, maxWidth:'100%'}}>{pokemon.stats.attack}</div>
                        </div>
                    </div>
                    <div className="stat-row">
                        <div>defense</div>
                        <div className="stat-bar">
                            <div className="stat-bar-bg" style={{width: `${pokemon.stats.defense}%`, maxWidth:'100%'}}>{pokemon.stats.defense}</div>
                        </div>
                    </div>
                    <div className="stat-row">
                        <div>sp-atk</div>
                        <div className="stat-bar">
                            <div className="stat-bar-bg" style={{width: `${pokemon.stats.spatk}%`, maxWidth:'100%'}}>{pokemon.stats.spatk}</div>
                        </div>
                    </div>
                    <div className="stat-row">
                        <div>sp-def</div>
                        <div className="stat-bar">
                            <div className="stat-bar-bg" style={{width: `${pokemon.stats.spdef}%`, maxWidth:'100%'}}>{pokemon.stats.spdef}</div>
                        </div>
                    </div>
                    <div className="stat-row">
                        <div>speed</div>
                        <div className="stat-bar">
                            <div className="stat-bar-bg" style={{width: `${pokemon.stats.speed}%`, maxWidth:'100%'}}>{pokemon.stats.speed}</div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}