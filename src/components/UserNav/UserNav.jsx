import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/authOperations";
import { selectUser } from "../../redux/auth/authSelectors";
import css from "./UserNav.module.css";

export function UserNav() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const handleLogOut = () => {
    dispatch(logOut());
  };
  return (
    <div className={css.wrapper}>
      <p className={css.greetings}>
        Welcome, <span className={css.user}>{user.name}</span>!
      </p>
      <button onClick={handleLogOut} className={css.btn} type="button">
        Log Out
      </button>
    </div>
  );
}

export default UserNav;
