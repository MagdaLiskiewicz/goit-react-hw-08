import { Link } from "react-router-dom";
import Container from "../../components/Container/Container";
import DocumentTitle from "../../components/DocumentTitle";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import css from "./RegisterPage.module.css";

export function RegisterPage() {
  return (
    <>
      <DocumentTitle>Register</DocumentTitle>
      <Container>
        <div className={css.pageWrap}>
          <div className={css.pageTopWrap}>
            <div className={css.title}>
              <h1 className={css.pageTitle}>Join Us!</h1>
              <p className={css.text}>
                Create an account to start managing your contacts.
              </p>
              <img
                className={css.pageImg}
                // src={image}
                alt="people creating account"
                width="400"
              />
            </div>
            <RegisterForm />
          </div>
          <div className={css.pageInform}>
            <p>Already have an account?</p>
            <Link className={css.link} to="/login">
              Log In
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
}

export default RegisterPage;
