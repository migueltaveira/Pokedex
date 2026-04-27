import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemonDetails } from "../services/api";

function PokemonDetails() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadPokemonDetails() {
      try {
        setIsLoading(true);
        setError("");

        const data = await getPokemonDetails(name);
        setPokemon(data);
      } catch (loadError) {
        setError(loadError.message);
        setPokemon(null);
      } finally {
        setIsLoading(false);
      }
    }

    loadPokemonDetails();
  }, [name]);

  if (isLoading) {
    return (
      <section className="details-card">
        <p className="section-label">Detalhes</p>
        <p className="status-message">Carregando detalhes do pokemon...</p>
      </section>
    );
  }

  if (error || !pokemon) {
    return (
      <section className="details-card">
        <p className="section-label">Detalhes</p>
        <h2>Pokemon nao encontrado</h2>
        <p className="status-message status-message--error">
          {error || "Nao foi possivel carregar os detalhes do pokemon."}
        </p>
      </section>
    );
  }

  const image =
    pokemon.sprites.other["official-artwork"].front_default ||
    pokemon.sprites.front_default;
  const pokemonId = String(pokemon.id).padStart(3, "0");
  const pokemonTypes = pokemon.types.map((type) => type.type.name).join(" / ");
  const pokemonStats = pokemon.stats.slice(0, 4);

  return (
    <section className="details-card">
      <p className="section-label">Detalhes</p>
      <div className="pokemon-details">
        <div className="pokemon-details__summary">
          <span className="pokemon-card__id">#{pokemonId}</span>
          <h2>{pokemon.name}</h2>
          <p>Tipos: {pokemonTypes}</p>
          <p>Altura: {pokemon.height / 10} m</p>
          <p>Peso: {pokemon.weight / 10} kg</p>
        </div>

        <div className="pokemon-details__media">
          <img src={image} alt={pokemon.name} className="pokemon-details__image" />
        </div>
      </div>

      <div className="pokemon-stats">
        {pokemonStats.map((stat) => (
          <article key={stat.stat.name} className="pokemon-stats__card">
            <p className="section-label">{stat.stat.name}</p>
            <strong>{stat.base_stat}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}

export default PokemonDetails;
