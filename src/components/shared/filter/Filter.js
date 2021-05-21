import { Formik, Form, Field } from "formik";
import { Select } from 'antd';
const { Option } = Select;

const Filter = ({ onFiltersSubmit, initialValues }) => {
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const validate = () => {
    const errors = {};
    return errors;
  };

  const onSubmit = (values) => {
    console.log(values);
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
          {/* <Field name="type" as="select">
            <Select name="type" defaultValue="all" style={{ width: 120 }} onChange={handleChange}>
              <Option value="">all</Option>
              <Option value="cat">cat</Option>
              <Option value="dog">dog</Option>
              <Option value="bird">bird</Option>
            </Select>
           </Field> */}
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
