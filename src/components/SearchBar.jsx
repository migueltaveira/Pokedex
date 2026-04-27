function SearchBar() {
  return (
    <label className="search-bar">
      <span>Buscar Pokémon</span>
      <input
        type="text"
        placeholder="Ex.: bulbasaur"
        aria-label="Buscar Pokémon"
      />
    </label>
  );
}

export default SearchBar;
