import { addContact } from "../../redux/contactsOps";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./ContactsForm.module.css";

export default function ContactForm() {
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    number: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .matches(/^[a-zA-Z\s]*$/, "Only letters are allowed!")
      .required("Name is required!"),
    number: Yup.number()
      .transform((value, originalValue) =>
        originalValue.trim() === "" ? null : value
      )
      .nullable()
      .required("Number is required!")
      .positive("Number must be positive!")
      .integer("Number must be an integer!"),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <div className={styles.formContainer}>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({ values, handleChange }) => (
          <Form>
            <div>
              <Field
                type="text"
                name="name"
                value={values.name}
                placeholder="Name"
                onChange={handleChange}
              />
              <ErrorMessage name="name" component="div" />
            </div>
            <div>
              <Field
                type="text"
                name="number"
                value={values.number}
                placeholder="Number"
                onChange={handleChange}
              />
              <ErrorMessage name="number" component="div" />
            </div>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}