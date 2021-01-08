import React, { useState } from 'react';
import './register.css';

function Register() {
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    gender: '',
    jobRole: '',
    department: '',
  };
  const [formData, setformData] = useState(initialState);
  const handleChange = e => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      firstName,
      lastName,
      email,
      password,
      gender,
      jobRole,
      department,
    };
    console.log(data);
  };
  const {
    firstName,
    lastName,
    email,
    password,
    gender,
    jobRole,
    department,
  } = formData;
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <h1>Register</h1>
          <div className="form-group">
            {/* <label htmlFor="firstName">First Name </label> */}
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={handleChange}
              placeholder="First Name"
            />
          </div>
          <div className="form-group">
            {/* <label htmlFor="lastName">Last Name </label> */}
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={handleChange}
              placeholder="Last Name"
            />
          </div>
          <div className="form-group">
            {/* <label htmlFor="title">Title </label> */}
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            {/* <label htmlFor="email">Password </label> */}
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="password"
            />
          </div>
          <div className="form-group">
            {/* <label htmlFor="department">Department </label> */}
            <input
              type="text"
              id="department"
              name="department"
              value={department}
              onChange={handleChange}
              placeholder="department"
            />
          </div>
          <div className="form-group">
            {/* <label htmlFor="department">Department </label> */}
            <input
              type="text"
              id="jobRole"
              name="jobRole"
              value={jobRole}
              onChange={handleChange}
              placeholder="JobRole"
            />
          </div>
          <div>
            <input
              type="radio"
              id="female"
              name="gender"
              value="Female"
              onChange={handleChange}
              checked={gender === 'Female'}
            />
            <label htmlFor="female">Female</label>
          </div>
          <div>
            <input
              id="male"
              type="radio"
              name="gender"
              value="Male"
              onChange={handleChange}
              checked={gender === 'Male'}
            />
            <label htmlFor="male">Male</label>
          </div>
          <div>
            <input
              id="other"
              type="radio"
              name="gender"
              value="Other"
              onChange={handleChange}
              checked={gender === 'Other'}
            />
            <label htmlFor="other">Other</label>
          </div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
