import { useDispatch, useSelector } from "react-redux";
import DocumentTitle from "../../components/DocumentTitle";
import { selectError, selectIsLoading } from "../../redux/selectors";
import Container from "../../components/Container/Container";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import Loader from "../../components/Loader/Loader";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/operations";
import css from "./ContactsPage.module.css";
// import { Toaster } from "react-hot-toast";
import { FaAddressBook } from "react-icons/fa";
import ContactList from "../../components/ContactList/ContactList";
import image from "../../assets/images/contact (1).jpg";

export function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <DocumentTitle>Your contacts</DocumentTitle>
      <Container>
        <div className={css.pageWrap}>
          <div className={css.pageTopWrap}>
            <div className={css.titleWrap}>
              <h1 className={css.pageTitle}>
                <FaAddressBook className={css.titleIcon} size="40" />
                Phonebook
              </h1>
              <img
                className={css.pageImg}
                src={image}
                alt="people creating account"
                // width="200"
              />
              {/* <Toaster position="top-right" reverseOrder={false} /> */}
            </div>
            <ContactForm />
          </div>
          <SearchBox />
          {isLoading && !error && <Loader />}
          {error && (
            <p className={css.error}>
              Something went wrong...
              <span className={css.errorMessage}>
                Please check your internet connection
              </span>
            </p>
          )}
          <ContactList />
        </div>
      </Container>
    </>
  );
}

export default ContactsPage;
