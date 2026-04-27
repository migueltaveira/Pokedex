import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PokemonCard from "../components/PokemonCard";
import SearchInput from "../components/SearchInput";
import { listPokemons } from "../services/api";

function Home() {
  const navigate = useNavigate();
  const [pokemons, setPokemons] = useState([]);
  const [allPokemons, setAllPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function loadPokemons() {
      try {
        setIsLoading(true);
        setError("");

        const [featuredData, allData] = await Promise.all([
          listPokemons(20, 0),
          listPokemons(1302, 0),
        ]);

        const normalizedPokemons = featuredData.results.map((pokemon, index) => ({
          id: String(index + 1).padStart(3, "0"),
          name: pokemon.name,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            index + 1
          }.png`,
        }));
        const normalizedAllPokemons = allData.results.map((pokemon) => {
          const pokemonId = pokemon.url.split("/").filter(Boolean).pop();

          return {
            id: String(pokemonId).padStart(3, "0"),
            name: pokemon.name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`,
          };
        });

        setPokemons(normalizedPokemons);
        setAllPokemons(normalizedAllPokemons);
      } catch (loadError) {
        setError(loadError.message);
      } finally {
        setIsLoading(false);
      }
    }

    loadPokemons();
  }, []);

  const normalizedSearch = search.trim().toLowerCase();
  const pokemonSource = normalizedSearch ? allPokemons : pokemons;
  const filteredPokemons = pokemonSource.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(normalizedSearch),
  );
  const visiblePokemons = normalizedSearch
    ? filteredPokemons.slice(0, 20)
    : filteredPokemons;

  function handleSearchSubmit(event) {
    event.preventDefault();

    const pokemonName = normalizedSearch;

    if (!pokemonName) {
      return;
    }

    navigate(`/pokemon/${pokemonName}`);
  }

  return (
    <section className="content-grid">
      <div className="content-grid__intro">
        <p className="section-label">Pagina inicial</p>
        <h2>Explore sua Pokedex</h2>
        <p>
          Os 20 primeiros pokemons sao carregados da PokeAPI e exibidos em cards
          com acesso rapido para a rota de detalhes.
        </p>
        <SearchInput
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          onSubmit={handleSearchSubmit}
        />
        <p className="search-bar__hint">
          Digite um nome para ver previews. Pressione Enter para abrir os detalhes.
        </p>
      </div>

      {isLoading && <p className="status-message">Carregando pokemons...</p>}

      {error && <p className="status-message status-message--error">{error}</p>}

      {!isLoading && !error && (
        <>
          {filteredPokemons.length === 0 ? (
            <p className="status-message">Nenhum pokemon encontrado.</p>
          ) : (
            <div className="pokemon-grid">
              {visiblePokemons.map((pokemon) => (
                <PokemonCard key={pokemon.name} pokemon={pokemon} />
              ))}
            </div>
          )}
        </>
      )}
    </section>
  );
}

export default Home;
