/*
import { useParams } from "react-router-dom";
import { getPokemonBySlug } from "../services/pokemonService";

function PokemonDetailsPage() {
  const { pokemonName } = useParams();
  const pokemon = getPokemonBySlug(pokemonName);

  if (!pokemon) {
    return (
      <section className="details-card">
        <p className="section-label">Detalhes</p>
        <h2>Pokémon não encontrado</h2>
        <p>Confira o nome informado na rota ou adapte a busca à sua API.</p>
      </section>
    );
  }

  return (
    <section className="details-card">
      <p className="section-label">Detalhes</p>
      <h2>{pokemon.name}</h2>
      <p>Tipo principal: {pokemon.type}</p>
      <p>
        Esta página já está conectada ao React Router DOM e pronta para receber
        consumo real da PokeAPI.
      </p>
    </section>
  );
}

export default PokemonDetailsPage;*/
