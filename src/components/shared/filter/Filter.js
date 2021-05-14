import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field } from "formik";
import { setFilter } from "../../../redux/thunks/animal";
import { getAnimals } from "../../../redux/thunks/animal";

const Filter = () => {
  const dispatch = useDispatch();

  const validate = () => {
    const errors = {};
    return errors;
  };

  const {
    pageSize,
    currentPage,
    filter: { type },
  } = useSelector((state) => state.animal);

  const submit = (values, { setSubmitting }) => {
    // setTimeout(() => {
    //   alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
    // }, 400);
    console.log(values);
    dispatch(getAnimals(currentPage, pageSize, values.type));
    dispatch(setFilter(values.type));
  };

  return (
    <Formik
      initialValues={{ type: "", sex: "" }}
      validate={validate}
      onSubmit={submit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="type" />
          <Field type="text" name="sex" />
          <button type="submit" disabled={isSubmitting}>
            Find
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Filter;
