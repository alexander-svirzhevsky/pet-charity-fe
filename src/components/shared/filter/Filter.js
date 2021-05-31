import { Formik, Form } from "formik";
import { Select } from "antd";
const { Option } = Select;

const Filter = ({ initialValues, setFilterCriteria, filterCriteria }) => {
  function typeChange(value) {
    setFilterCriteria({
      ...filterCriteria,
      type: value,
    });
  }

  function sexChange(value) {
    setFilterCriteria({
      ...filterCriteria,
      sex: value,
    });
  }

  return (
    <Formik enableReinitialize initialValues={initialValues}>
      {({ isSubmitting }) => (
        <Form>
          <Select
            name="type"
            defaultValue="all"
            style={{ width: 120 }}
            onChange={typeChange}
            value={initialValues.type}
          >
            <Option value="">all</Option>
            <Option value="cat">cat</Option>
            <Option value="dog">dog</Option>
            <Option value="bird">bird</Option>
            <Option value="fish">fish</Option>
            <Option value="horse">horse</Option>
            <Option value="rabbit">rabbit</Option>
            <Option value="turtle">turtle</Option>
            <Option value="hamster">hamster</Option>
            <Option value="ferret">ferret</Option>
          </Select>
          <Select
            defaultValue="all"
            style={{ width: 120 }}
            onChange={sexChange}
            value={initialValues.sex}
          >
            <Option value="">all</Option>
            <Option value="he">male</Option>
            <Option value="she">female</Option>
          </Select>
          {/* <Field name="type" as="select">
            <option value="">all</option>
            <option value="cat">cat</option>
            <option value="dog">dog</option>
            <option value="bird">bird</option>
          </Field> */}
          {/* <Field as="select" name="sex">
            <option value="">all</option>
            <option value="he">male</option>
            <option value="she">female</option>
          </Field> */}
          {/* <button type="submit" disabled={isSubmitting}>
            Find
          </button> */}
        </Form>
      )}
    </Formik>
  );
};

export default Filter;
