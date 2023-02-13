import { useState } from "react";

function useFormAndValidation(obj) {
  const [values, setValues] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [isInputValid, setIsInputValid] = useState(true);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { value, name } = event.target;
    setValues({ ...values, [name]: value });
    setIsValid(event.target.closest("form").checkValidity());
    setIsInputValid(event.target.closest("input").checkValidity())
    console.log(values);
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    setErrors({ ...errors, [name]: event.currentTarget.validationMessage });
    setIsValid(event.target.closest("form").checkValidity());
    setIsInputValid(event.target.closest("input").checkValidity())
  };

  const handleChangeSelect = (event) => {
    const { value, name } = event.target;
    setValues({ ...values, [name]: value });
  }



  return { values, handleChange, setValues, errors, setErrors, isValid, setIsValid, handleBlur, isInputValid, handleChangeSelect };

}

export default useFormAndValidation;
