import { useState } from "react";

function useFormAndValidation(obj) {
  const [values, setValues] = useState({});
  const [isValid, setIsValid] = useState(true);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { value, name } = event.target;
    setValues({ ...values, [name]: value });
    handleBlur(event)
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    setErrors({ ...errors, [name]: event.currentTarget.validationMessage });
    setIsValid(event.target.closest("form").checkValidity());
  };

  const resetValidation = () => {

  }

  return { values, handleChange, setValues, errors, setErrors, isValid, setIsValid, handleBlur };
}

export default useFormAndValidation;
