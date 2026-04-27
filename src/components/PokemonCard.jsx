import { Link } from "react-router-dom";

function PokemonCard({ pokemon }) {
  return (
    <article className="pokemon-card">
      <span className="pokemon-card__id">#{pokemon.id}</span>
      <img
        src={pokemon.image}
        alt={pokemon.name}
        className="pokemon-card__image"
      />
      <h2>{pokemon.name}</h2>
      <Link to={`/pokemon/${pokemon.name}`} className="pokemon-card__link">
        Ver detalhes
      </Link>
    </article>
  );
}

export default PokemonCard;
