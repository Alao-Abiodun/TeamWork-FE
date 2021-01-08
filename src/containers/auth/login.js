// @ts-nocheck
import React, { useState } from 'react';
import './register.css';
import Input from '../../components/Input';

function Login() {
  const initialState = {
    email: {
      value: '',
      placeholder: 'email address',
      type: 'email',
      elementType: 'input',
      name: 'email',
    },
    password: {
      type: 'password',
      value: '',
      placeholder: 'Password',
      elementType: 'input',
      name: 'password',
    },
  };
  const [formData, setformData] = useState(initialState);

  const handleChange = e => {
    console.log(e.target);
    const { value, name } = e.target;
    const updatedForm = {
      ...formData[name],
      value: value,
    };
    setformData({
      ...formData,
      [name]: updatedForm,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      form,
    };
    console.log(data);
  };

  let registerForm = [];

  for (let key in formData) {
    registerForm.push({
      key: key,
      config: formData[key],
    });
  }
  let form = registerForm.map(form => (
    <Input
      key={form.key}
      type={form.config.type}
      id={form.key}
      value={form.config.value}
      name={form.config.name}
      placeholder={form.config.placeholder}
      onchange={handleChange}
      label={form.config.label}
      checked={form.config.checked}
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

export default Login;
