import PokemonCard from '../components/PokemonCard';
import pokemons from '../data/pokedex';
export default function Page() {
  return (
    <>
      <header>
        <h1>Pokedex</h1>
      </header>
      <main>
        <form className="pokedex-control">
          <div className="form-control">
            <label htmlFor="filter-name">Name:</label>
            <input type="text" id="filter-name" />
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
          {pokemons.map(pokemon => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </section>
      </main>
    </>
  );
};