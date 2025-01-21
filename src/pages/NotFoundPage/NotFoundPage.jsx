import { NavLink } from "react-router-dom";
import css from "./NotFoundPage.module.css";
import Container from "../../components/Container/Container";

const NotFoundPage = () => {
  return (
    <Container>
      <div className={css.imageBox}>
        <div className={css.titleWrapper}>
          <h1 className={css.title}>404 ERROR</h1>
          <NavLink className={css.btn} to="/">
            Go home
          </NavLink>
        </div>
      </div>
    </Container>
  );
};

export default NotFoundPage;
