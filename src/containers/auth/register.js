// @ts-nocheck
import React, { useState } from "react";
import "./register.css";
import Input from "../../components/Input";

function Register() {
  const initialState = {
    firstName: {
      value: "",
      placeholder: "First Name",
      type: "text",
    },
    lastName: {
      value: "",
      placeholder: "Last Name",
      type: "text",
    },
    email: {
      value: "",
      placeholder: "email address",
      type: "email",
    },
    password: {
      type: "password",
      value: "",
      placeholder: "Password",
    },
    male: {
      type: "radio",
      name: "gender",
      id: "male",
      value: "Male",
    },
    female: {
      type: "radio",
      name: "gender",
      id: "female",
      value: "fmeale",
    },
    jobRole: { type: "text", placeholder: "Job Role", value: "" },
    department: { type: "text", placeholder: "Department", value: "" },
  };
  const [formData, setformData] = useState(initialState);

  const handleChange = (e) => {
    const { value, name } = e.target;
    const updatedForm = {
      ...formData[name],

      value: value,
    };
    setformData({
      ...formData,
      [name]: updatedForm, // email, firstName

      /*
      email:{
      value: "mayowad"
      }
      */
    });
    // setformData(updatedForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };


  // const {
  //   firstName,
  //   lastName,
  //   email,
  //   password,
  //   gender,
  //   jobRole,
  //   department,
  // } = formData;

  let registerForm = [];

  for (let key in formData) {
    registerForm.push({
      key: key,
      config: formData[key],
    });
  }
  // console.log(registerForm);
  let form = registerForm.map((form) => (
    <Input
      key={form.key}
      type={form.config.type}
      id={form.key}
      value={form.config.value}
      name={form.key}
      placeholder={form.config.placeholder}
      onchange={handleChange}
    />
  ));
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          {form}

          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
