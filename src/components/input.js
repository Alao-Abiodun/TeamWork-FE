import React from "react";
import "../containers/auth/register.css"

const Input = ({ type, id, name, value, onchange, placeholder }) => {
  return (
    <div className="form-group">
      {/* <label htmlFor="firstName">First Name </label> */}
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onchange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
