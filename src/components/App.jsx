import css from "./App.module.css";
import "modern-normalize/modern-normalize.css";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout/SharedLayout.jsx";
import { lazy, useEffect } from "react";
import RestrictedRoute from "./Restricted/RestrictedRoute.jsx";
import PrivateRoute from "./PrivateRoute/PrivateRoute.jsx";
import { refreshUser } from "../redux/auth/authOperations.js";
import { useDispatch, useSelector } from "react-redux";
import { selectIsRefreshing } from "../redux/auth/authSelectors.js";
import { Toaster } from "react-hot-toast";

const HomePage = lazy(() => import("../pages/HomePage/HomePage.jsx"));
const ContactsPage = lazy(
  () => import("../pages/ContactsPage/ContactsPage.jsx")
);
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage.jsx"));
const RegisterPage = lazy(
  () => import("../pages/RegisterPage/RegisterPage.jsx")
);
const NotFoundPage = lazy(
  () => import("../pages/NotFoundPage/NotFoundPage.jsx")
);

const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? null : (
    <div className={css.container}>
      <Toaster />
      <SharedLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/contacts"
            element={
              <PrivateRoute
                redirectPath="/login"
                component={<ContactsPage />}
              />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectPath="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectPath="/contacts"
                component={<LoginPage />}
              />
            }
          />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </SharedLayout>
    </div>
  );
};

export default App;
