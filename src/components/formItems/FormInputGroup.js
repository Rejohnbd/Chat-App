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
    <div className="form-group row">
      <label
        htmlFor={id}
        className="col-lg-3 col-md-3 col-sm-4 mt-sm-2 text-right"
      >
        {label} <span className="required-label">*</span>
      </label>
      <div className="col-lg-4 col-md-9 col-sm-8">
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
    </div>
  );
};

export default FormInputGroup;
