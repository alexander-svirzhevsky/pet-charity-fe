import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field } from "formik";
// import { setFilter } from "../../../redux/thunks/animal";
import { getAnimals } from "../../../redux/thunks/animal";

const Filter = ({ currentPage, pageSize }) => {
  const dispatch = useDispatch();

  const validate = () => {
    const errors = {};
    return errors;
  };

  const [filter, setFilter] = useState({
    type: "",
    sex: "",
  });

  const { type, sex } = filter;

  // const {
  //   filter: { type },
  // } = useSelector((state) => state.animal);
  const onChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const onFilterChange = (values, { setSubmitting }) => {
    // setTimeout(() => {
    //   alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
    // }, 400);
    // dispatch(setFilter(values.type));
    dispatch(getAnimals(currentPage, pageSize, type, sex));
  };

  return (
    <Formik
      initialValues={{ type: "", sex: "" }}
      validate={validate}
      onSubmit={onFilterChange}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field name="type" as="select" value={type} onChange={onChange}>
            <option value="">all</option>
            <option value="cat">cat</option>
            <option value="dog">dog</option>
            <option value="bird">bird</option>
          </Field>
          <Field as="select" name="sex" value={sex} onChange={onChange}>
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
