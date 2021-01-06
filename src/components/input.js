import React from "react";
import "../containers/auth/register.css";

const Input = ({
  type,
  id,
  name,
  value,
  onchange,
  placeholder,
  label,
  checked,
}) => {
  //   let inputElement;
  //   switch (elementType) {
  //   case "input":
  //     inputElement = (
  //       <input
  //         // onBlur={onblur}
  //         // id={label}
  //         // className={inputClasses.join(" ")}
  //         // {...config}
  //         // value={value}
  //         // onChange={onchange}
  //         // name={label}
  //         // disabled={disabled}
  //       />
  //     );
  //     break;
  //   case "textarea":
  //     inputElement = (
  //       <textarea
  //       //   onBlur={onblur}
  //       //   id={label}
  //       //   {...config}
  //       //   value={value}
  //       //   onChange={onchange}
  //       //   name={label}
  //       //   className={textClasses.join(" ")}
  //       //   rols="5"
  //       ></textarea>
  //     );
  //     break;
  //   case "select":
  //     inputElement = (
  //       <select
  //       //   // onBlur={onblur}
  //       //   // id={label}
  //       //   // value={value}
  //       //   // onChange={onchange}
  //       //   // className={inputClasses.join(" ")}
  //       //   // multiple="multiple"
  //       >
  //        {config.options.map((option) => (
  //           <option key={option.value} value={option.value}>
  //             {option.displayValue}
  //           </option>
  //         ))}
  //       </select> 
  //     );
  //     break;
  //   default:
  //     inputElement = (
  //       <input
  //       //   onBlur={onblur}
  //       //   id={label}
  //       //   className={inputClasses.join(" ")}
  //       //   {...config}
  //       //   value={value}
  //       //   onChange={onchange}
  //       //   name={label}
  //       />
  //     );
  //     break;
  // }
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
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
