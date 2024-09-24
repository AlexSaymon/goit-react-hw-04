const SearchBar = ({ handleSubmit }) => {
  return (
    <div>
      <header>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
        </form>
      </header>
    </div>
  );
};

export default SearchBar;
