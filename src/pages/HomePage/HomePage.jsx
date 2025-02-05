import { Link } from "react-router-dom";
import Container from "../../components/Container/Container";
import DocumentTitle from "../../components/DocumentTitle";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/authSelectors";
import css from "./HomePage.module.css";
import image from "../../assets/images/phonebook.jpg";

export function HomePage() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <DocumentTitle>Home</DocumentTitle>
      <Container>
        <div className={css.pageWrap}>
          <div className={css.pageTopWrap}>
            <div className={css.titleWrap}>
              <h1 className={css.pageTitle}>
                Welcome to Your Personal
                <span className={css.accent}> PhoneBook</span>!
              </h1>
              <h2 className={css.pageSubtitle}>
                Secure, Simple, and Always Accessible. <br /> Keep your contacts
                safe and organized in one place.
              </h2>
            </div>
            <img
              src={image}
              alt="phonebook"
              className={css.pageImg}
              width="350"
            />
          </div>

          {!isLoggedIn && (
            <div className={css.pageInform}>
              <p className={css.accent}>
                To get started, choose an option below:
              </p>
              <div className={css.informText}>
                <p>New here?</p>
                <Link className={css.link} to="/register">
                  REGISTER
                </Link>
                <p>and start organizing your contacts today!</p>
              </div>
              <div className={css.informText}>
                <p>Already have an account?</p>
                <Link className={css.link} to="/login">
                  LOG IN
                </Link>
              </div>
            </div>
          )}
        </div>
      </Container>
    </>
  );
}

export default HomePage;
