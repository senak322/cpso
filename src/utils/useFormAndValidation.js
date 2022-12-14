import { useState } from "react";

function useFormAndValidation(obj) {
  const [values, setValues] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { value, name } = event.target;
    setValues({ ...values, [name]: value });
    setIsValid(event.target.closest("form").checkValidity());
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    setErrors({ ...errors, [name]: event.currentTarget.validationMessage });
    setIsValid(event.target.closest("form").checkValidity());
  };



  return { values, handleChange, setValues, errors, setErrors, isValid, setIsValid, handleBlur };

}

export default useFormAndValidation;
