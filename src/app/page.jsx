'use client';
import { useEffect, useState } from 'react';
import PokemonCard from '../components/PokemonCard';
import pokemons from '../data/pokedex';

export default function Page() {
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);


  useEffect(() => {
    setFilteredData(pokemons)
  }, []);

  const handleSearch = (event) => {
    const searchPoke = event.target.value;
    setQuery(searchPoke);
    
    const results = pokemons.filter(poke => 
      typeof poke.name === 'string' && poke.name.toLowerCase().includes(searchPoke.toLowerCase())
    );
    console.log(results);
    setFilteredData(results);
  }
  return (
    <>
      <header>
        <h1>Pokedex</h1>
      </header>
      <main>
        <form className="pokedex-control">
          <div className="form-control">
            <label htmlFor="filter-name">Name:</label>
            <input type="text" id="filter-name" value={query} onChange={handleSearch}/>
          </div>
          <div className="form-control">
            <label htmlFor="filter-type">Type:</label>
            <select id="filter-type">
              <option value="">All</option>
            </select>
          </div>
          <div className="form-control">
            <label htmlFor="sort">Sort:</label>
            <select id="sort-type">
              <option>Lowest Number (First)</option>
              <option>Highest Number (First)</option>
              <option>A-Z</option>
              <option>Z-A</option>
            </select>
          </div>
        </form>
        <section className="pokedex">
          {filteredData.map(poke => (
            <PokemonCard key={poke.id} pokemon={poke} />
          ))}
        </section>
      </main>
    </>
  );
};