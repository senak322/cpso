import React from "react";
import useFormAndValidation from "../utils/useFormAndValidation.js";

function AddStudentPopup({ isOpen, onClose, onSubmit }) {
  const close = process.env.PUBLIC_URL + "/close.svg";
  const formValues = {
    email: ""
  };

  const { values, handleChange, setValues, errors, isValid, handleBlur } = useFormAndValidation();

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(values.email);
  }

  React.useEffect(() => {
    setValues(formValues);
  }, []);

  return (
    <div className={`popup ${isOpen ? "popup_is-open" : ""} popup_type_info `}>
      <div className="popup__content popup__content_type_add">
        <button
          type="button"
          onClick={onClose}
          className="popup__close"
          style={{ backgroundImage: `url(${close})` }}
        />
        <h3 className="popup__title popup__title_type_add">
          Укажите E-mail ученика
        </h3>
        <form
          className="popup__form"
          action="#"
          name="add-student"
          onSubmit={handleSubmit}
          noValidate
        >
          <input
            className="popup__input"
            id="add-student"
            name="email"
            type="email"
            placeholder="Введите E-mail"
            required=""
            minLength={2}
            maxLength={40}
            value={values.email || ""}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <span
                className={`form__error ${
                  isValid ? "" : "form__error_type_active"
                }`}
              >
                {errors.email}
              </span>
          <button
            className="popup__save"
            type="submit"
            disabled={isValid ? false : true}
          >
            Отправить
          </button>
        </form>
        <p className="popup__description" >После отправки необходимо зайти на почту ученика и подтвердить добавление</p>
      </div>
    </div>
  );
}

export default AddStudentPopup;
