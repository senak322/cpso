import { useState, useCallback } from "react";

function useFormAndValidation(obj) {
  const [values, setValues] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [isInputValid, setIsInputValid] = useState(true);
  const [errors, setErrors] = useState({});
  const [selectedFiles, setSelectedFiles] = useState({});

  const handleChange = (event) => {
    const { value, name } = event.target;
    setValues({ ...values, [name]: value });
    setIsValid(event.target.closest("form").checkValidity());
    setIsInputValid(event.target.closest("input").checkValidity());
    console.log(values);
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    setErrors({ ...errors, [name]: event.currentTarget.validationMessage });
    setIsValid(event.target.closest("form").checkValidity());
    setIsInputValid(event.target.closest("input").checkValidity());
  };

  const handleChangeSelect = (event) => {
    const { value, name } = event.target;
    setValues({ ...values, [name]: value });
  };

  const hadleChangeFiles = (event) => {
    const { name } = event.target;
    console.log(name);
    setSelectedFiles({ ...selectedFiles, [name]: event.target.files });
    console.log(selectedFiles);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const fromData = new FormData();
    fromData.append("files", selectedFiles);
    fromData.append("values", values);
    console.log(fromData);
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return {
    values,
    handleChange,
    setValues,
    errors,
    setErrors,
    isValid,
    setIsValid,
    handleBlur,
    isInputValid,
    handleChangeSelect,
    hadleChangeFiles,
    handleSubmitForm,
    resetForm
  };
}

export default useFormAndValidation;
