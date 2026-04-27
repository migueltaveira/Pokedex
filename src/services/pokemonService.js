export const featuredPokemons = [
  {
    id: "001",
    name: "Bulbasaur",
    slug: "bulbasaur",
    type: "Grass / Poison",
  },
  {
    id: "004",
    name: "Charmander",
    slug: "charmander",
    type: "Fire",
  },
  {
    id: "007",
    name: "Squirtle",
    slug: "squirtle",
    type: "Water",
  },
  {
    id: "025",
    name: "Pikachu",
    slug: "pikachu",
    type: "Electric",
  },
];

export function getPokemonBySlug(slug) {
  return featuredPokemons.find((pokemon) => pokemon.slug === slug);
}
