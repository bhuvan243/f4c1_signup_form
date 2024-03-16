import React from "react";

const InputBox = ({ data, isValid }) => {
  const { type, name, label, pattern, errorMessage } = data;

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input 
        type={type}
        className={isValid ? "valid" : "invalid"}
        id={name} 
        name={name}
        pattern={pattern}
        required
       />
        {!isValid && <span>{errorMessage}</span>}
    </>
  );
};

export default InputBox;
