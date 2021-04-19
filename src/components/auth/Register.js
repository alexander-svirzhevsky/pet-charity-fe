import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { register } from "../../redux/actions/auth";

const Register = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) => {
    return setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (password !== password2) {
      console.log("Passwaord do not match");
    } else {
      dispatch(register({ name, email, password }), []);
    }
  };

  return (
    <>
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          onChange={(e) => onChange(e)}
          value={name}
          type="text"
          name="name"
          placeholder="Name"
        ></input>
        <input
          onChange={(e) => onChange(e)}
          value={email}
          type="email"
          name="email"
          placeholder="Email"
        ></input>
        <input
          onChange={(e) => onChange(e)}
          value={password}
          type="password"
          name="password"
          placeholder="Password"
        ></input>
        <input
          onChange={(e) => onChange(e)}
          value={password2}
          type="password"
          name="password2"
          placeholder="Confirm password"
        ></input>
        <input type="submit"></input>
      </form>
    </>
  );
};

export default Register;
