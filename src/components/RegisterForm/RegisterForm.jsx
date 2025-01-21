import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import css from "./RegisterForm.module.css";
import { register } from "../../redux/auth/authOperations";
import { FaKey } from "react-icons/fa";

const initialValues = {
  email: "",
  password: "",
  name: "",
};

export default function RegisterForm() {
  const dispatch = useDispatch();

  const registerSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    name: Yup.string()
      .min(2, "Name is too short!")
      .max(50, "Name is too long!")
      .required("Name is required"),
  });

  const handleSubmit = (values, actions) => {
    dispatch(register(values))
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
      validationSchema={registerSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <h2 className={css.title}>
          <FaKey className={css.icon} /> Registration
        </h2>
        <div className={css.fieldWrapper}>
          <label htmlFor="name" className={css.label}>
            Username
          </label>
          <Field
            className={css.field}
            type="text"
            name="name"
            id="name"
            autoComplete="on"
          />
          <ErrorMessage name="name" component="div" className={css.error} />
        </div>
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
          Sign Up
        </button>
      </Form>
    </Formik>
  );
}
