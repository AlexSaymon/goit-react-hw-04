import s from "./Searchbar.module.css";
import { CiSearch } from "react-icons/ci";
const SearchBar = ({ handleSubmit }) => {
  return (
    <div>
      <header className={s.header}>
        <form onSubmit={handleSubmit} className={s.form}>
          <button className={s.button} type="submit">
            <CiSearch />
          </button>
          <input
            className={s.input}
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    </div>
  );
};

export default SearchBar;
