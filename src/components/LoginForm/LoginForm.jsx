import { Field, Form, Formik, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import css from "./LoginForm.module.css";
import { logIn } from "../../redux/auth/authOperations";
import * as Yup from "yup";
import { FaUnlockAlt } from "react-icons/fa";

const initialValues = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const dispatch = useDispatch();

  const loginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values))
      .unwrap()
      .then(() => {
        console.log("login success");
      })
      .catch(() => {
        console.log("login error");
      });
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <h2 className={css.title}>
          <FaUnlockAlt className={css.icon} /> Log In
        </h2>
        <div className={css.fieldWrapper}>
          <label htmlFor="email" className={css.label}>
            Email
          </label>
          <Field
            className={css.field}
            type="email"
            name="email"
            id="email"
            autoComplete="on"
          />
          <ErrorMessage name="email" component="div" className={css.error} />
        </div>
        <div className={css.fieldWrapper}>
          <label htmlFor="password" className={css.label}>
            Password
          </label>
          <Field
            className={css.field}
            type="password"
            name="password"
            id="password"
            autoComplete="off"
          />
          <ErrorMessage name="password" component="div" className={css.error} />
        </div>
        <button type="submit" className={css.btn}>
          Log in
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
