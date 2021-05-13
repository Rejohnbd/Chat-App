import React from "react";

const FormInputGroup = ({
  id,
  label,
  type,
  name,
  placeholder,
  required,
  value,
  onChange,
  error,
}) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        type={type}
        className={`form-control ${error ? "is-invalid" : ""}`}
        required={required}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      {error && <small className="form-text text-danger">{error}</small>}
    </div>
  );
};

export default FormInputGroup;
