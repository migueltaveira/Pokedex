const POKE_API_BASE_URL = "https://pokeapi.co/api/v2";

export async function listPokemons(limit = 20, offset = 0) {
  const response = await fetch(
    `${POKE_API_BASE_URL}/pokemon?limit=${limit}&offset=${offset}`,
  );

  if (!response.ok) {
    throw new Error("Nao foi possivel listar os pokemons.");
  }

  return response.json();
}

export async function getPokemonDetails(name) {
  const response = await fetch(
    `${POKE_API_BASE_URL}/pokemon/${name.toLowerCase()}`,
  );

  if (!response.ok) {
    throw new Error("Nao foi possivel buscar os detalhes do pokemon.");
  }

  return response.json();
}
