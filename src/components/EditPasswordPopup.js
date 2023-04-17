import { useEffect } from "react";
import useFormAndValidation from "../utils/useFormAndValidation.js";
import close from "../images/close.svg";

function EditPasswordPopup({ isOpen, onClose, onSubmit, isAddOk, addErr }) {

  const {
    values,
    handleChange,
    setValues,
    errors,
    isValid,
    handleBlur,
    resetForm,
  } = useFormAndValidation();

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(values);
  }

  useEffect(() => {
    const formValues = {};
    setValues(formValues);
    resetForm();
  }, [resetForm, setValues]);

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
          Укажите новый пароль
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
            id="password"
            name="password"
            type="password"
            required
            placeholder="Введите пароль"
            minLength={2}
            maxLength={40}
            value={values.password || ""}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <span
            className={`form__error ${
              isValid ? "" : "form__error_type_active"
            }`}
          >
            {errors.password}
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

export default EditPasswordPopup;
