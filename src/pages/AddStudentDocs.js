import React from "react";
import BackButton from "../components/BackButton";
import { useParams } from "react-router-dom";
import useFormAndValidation from "../utils/useFormAndValidation.js";

function AddStudentDocs() {
  let { id } = useParams();

  const formValues = {};

  const { values, setValues, handleSubmitForm, hadleChangeFiles } =
    useFormAndValidation();

  React.useEffect(() => {
    setValues(formValues);
  }, []);

  console.log(values);
  return (
    <section className="register">
      <div className="register__container">
        <h1 className="register__add-header">{id} класс</h1>
        <form className="register__form" onSubmit={handleSubmitForm}></form>
        <p>Прикрепите подписанные документы</p>
        <div className="register__docs">
          <label className="register__label" htmlFor="application">
            Заявление в школу
          </label>
          <input
            required
            multiple
            accept="image/*, .png, .jpg, .jpeg, .pdf"
            name="application"
            id="application"
            type="file"
            onChange={hadleChangeFiles}
          ></input>
        </div>
        <BackButton />
      </div>
    </section>
  );
}

export default AddStudentDocs;
