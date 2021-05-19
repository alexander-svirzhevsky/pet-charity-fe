import { Formik, Form, Field } from "formik";

const Filter = ({ onFiltersSubmit, initialValues }) => {
  const validate = () => {
    const errors = {};
    return errors;
  };

  const onSubmit = (values) => {
    onFiltersSubmit(values);
  };

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field name="type" as="select">
            <option value="">all</option>
            <option value="cat">cat</option>
            <option value="dog">dog</option>
            <option value="bird">bird</option>
          </Field>
          <Field as="select" name="sex">
            <option value="">all</option>
            <option value="he">male</option>
            <option value="she">female</option>
          </Field>
          <button type="submit" disabled={isSubmitting}>
            Find
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Filter;
