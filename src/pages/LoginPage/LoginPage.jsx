import { Link } from "react-router-dom";
import Container from "../../components/Container/Container";
import DocumentTitle from "../../components/DocumentTitle";
import LoginForm from "../../components/LoginForm/LoginForm";
import css from "./LoginPage.module.css";

export function LoginPage() {
  return (
    <div>
      <DocumentTitle>Login</DocumentTitle>
      <Container>
        <div className={css.pageWrap}>
          <div className={css.pageTopWrap}>
            <div className={css.titleWrap}>
              <h1 className={css.pageTitle}>Welcome Back!</h1>
              <p className={css.text}>Log in to access your contacts.</p>
            </div>
            <LoginForm />
          </div>
          <div className={css.pageInform}>
            <p>
              Don&#39;t have an account?{" "}
              <Link className={css.link} to="/register">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default LoginPage;
