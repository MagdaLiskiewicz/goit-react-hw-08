import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import UserNav from "../UserNav/UserNav";
import AuthNav from "../AuthNav/AuthNav";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/authSelectors";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? css.active : css.link)}
        >
          Home
        </NavLink>

        {isLoggedIn && (
          <NavLink
            to="/contacts"
            className={({ isActive }) => (isActive ? css.active : css.link)}
          >
            Contacts
          </NavLink>
        )}
      </nav>
      <div className={css.logoName}>
        {isLoggedIn ? <UserNav /> : <AuthNav />}
      </div>
    </header>
  );
};

export default Navigation;
