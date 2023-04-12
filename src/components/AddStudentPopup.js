import { useEffect, useCallback } from "react";
import useFormAndValidation from "../utils/useFormAndValidation.js";
import close from "../images/close.svg";

function AddStudentPopup({ isOpen, onClose, onSubmit, isAddOk, addErr }) {
  const {
    values,
    handleChange,
    setValues,
    errors,
    isValid,
    handleBlur,
    resetForm,
  } = useFormAndValidation();

  const cbSetValues = useCallback(() => {
    const formValues = {};
    setValues(formValues);
  }, [setValues]);

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(values.email);
  }

  useEffect(() => {
    cbSetValues();
    if (!isOpen) {
      resetForm();
    }
  }, [cbSetValues, resetForm, isOpen]);

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
        <p className="popup__description">
          После отправки необходимо зайти на почту ученика и подтвердить
          добавление
        </p>
      </div>
    </div>
  );
}

export default AddStudentPopup;
