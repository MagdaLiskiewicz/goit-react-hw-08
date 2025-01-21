import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";
import { selectFilter } from "../../redux/selectors";
import { ImSearch } from "react-icons/im";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <form className={css.form}>
      <h2 className={css.title}>
        <ImSearch className={css.icon} /> Find contacts
      </h2>

      <input
        className={css.input}
        type="text"
        name="search"
        id="search"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Try search by name or number"
        aria-label="Search contacts by name or phone number"
      />
    </form>
  );
};

export default SearchBox;
