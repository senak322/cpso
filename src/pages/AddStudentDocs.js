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
        <form className="register__form" onSubmit={handleSubmitForm}>
          <h4
            className="register__add-description mb-3"
            style={{ textAlign: "center" }}
          >
            Прикрепите подписанные документы
          </h4>
          <div className="register__docs">
            <label className="register__label" htmlFor="application">
              Заявление в школу
              <p className="register__comment">
                Просим прикрепить качественную копию заполненного документа в
                формате PDF, а не фото с телефона. Если у вас несколько страниц
                скан-копии отдельными файлами, то вы можете прикрепить их все,
                выбрав сразу несколько файлов.
              </p>
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
          <div className="register__docs">
            <label className="register__label" htmlFor="opd-to-class">
              Согласие на обработку персональных данных
              <p className="register__comment">
                Просим прикрепить качественную копию заполненного документа в
                формате PDF, а не фото с телефона. Если у вас несколько страниц
                скан-копии отдельными файлами, то вы можете прикрепить их все,
                выбрав сразу несколько файлов.
              </p>
            </label>
            <input
              required
              multiple
              accept="image/*, .png, .jpg, .jpeg, .pdf"
              name="opd-to-class"
              id="opd-to-class"
              type="file"
              onChange={hadleChangeFiles}
            ></input>
          </div>
        </form>
        <div style={{ display: "flex", alignItems: "center" }}>
          <BackButton />
          <button className="register__add-btn">Отправить</button>
        </div>
      </div>
    </section>
  );
}

export default AddStudentDocs;
