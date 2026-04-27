function SearchInput({ value, onChange, onSubmit }) {
  return (
    <form className="search-bar" onSubmit={onSubmit}>
      <label className="search-bar__field">
        <span>Buscar pokemon</span>
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Ex.: bulbasaur"
          aria-label="Buscar pokemon"
        />
      </label>
      <button type="submit" className="search-bar__button">
        Buscar
      </button>
    </form>
  );
}

export default SearchInput;
