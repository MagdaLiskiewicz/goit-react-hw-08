import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/authSelectors";
import { useSelector } from "react-redux";

export function RestrictedRoute({ component, redirectPath }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? <Navigate to={redirectPath} /> : component;
}

export default RestrictedRoute;
