import React from "react";
import useFormAndValidation from "../utils/useFormAndValidation.js";
import close from "../images/close.svg";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function EditNamePopup({ isOpen, onClose, onSubmit, isAddOk, addErr }) {
  const userContext = React.useContext(CurrentUserContext);

  const { values, handleChange, setValues, errors, isValid, handleBlur } =
    useFormAndValidation();

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(values);
  }

  React.useEffect(() => {
    const formValues = {
      name: userContext.name,
      email: userContext.email,
      password: "",
    };
    setValues(formValues);
  }, [setValues, userContext.name, userContext.email, isOpen]);

  return (
    <div className={`popup ${isOpen ? "popup_is-open" : ""} popup_type_info `}>
      <div className="popup__content popup__content_type_add">
        <button
          type="button"
          onClick={onClose}
          className="popup__close"
          style={{ backgroundImage: `url(${close})` }}
        />
        <h3 className="popup__title popup__title_type_edit-name">
          Укажите новые данные
        </h3>
        <form
          className="popup__form"
          action="#"
          name="edit-info"
          onSubmit={handleSubmit}
          noValidate
        >
          <input
            className="popup__input"
            id="edit-name"
            name="name"
            type="text"
            placeholder="Введите ФИО"
            required
            minLength={2}
            maxLength={40}
            value={values.name || ""}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <span
            className={`form__error ${
              isValid ? "" : "form__error_type_active"
            }`}
          >
            {errors.name}
          </span>
          <input
            className="popup__input"
            id="edit-email"
            name="email"
            type="email"
            placeholder="Введите E-mail"
            required
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
            {errors.name}
          </span>

          <div className="popup__wrapper">
            <button
              className="popup__save"
              type="submit"
              disabled={isValid ? false : true}
            >
              Отправить
            </button>
            {isAddOk ? "" : <p className="popup__error">{addErr}</p>}
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditNamePopup;
