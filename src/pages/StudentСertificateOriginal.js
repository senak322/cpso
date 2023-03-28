import useFormAndValidation from "../utils/useFormAndValidation.js";
import React from "react";

function StudentСertificateOriginal() {
  const {
    values,
    handleChange,
    setValues,
    errors,
    isValid,
    handleBlur,
    isInputValid,
    handleChangeSelect,
    handleSubmitForm,
  } = useFormAndValidation();

  const formValues = {};

  React.useEffect(() => {
    setValues(formValues);
  }, []);

  return (
    <div className="register__wrapper">
      <div className="register__container">
        <h4>Запрос оригинала справки</h4>
        <p>Какого рода справку Вам необходимо направить</p>
        <form className="register__form" onSubmit={handleSubmitForm}>
          <select
            className="register__select"
            value={values.certificate || "default"}
            name="certificate"
            onChange={handleChangeSelect}
          >
            <option value="Справка о зачислении">Справка о зачислении</option>
            <option value="Справка о ПА">Справка о ПА</option>
            <option value="default" disabled>
              Нет данных
            </option>
          </select>
          <label>
            Укажите актуальный почтовый адрес, по которому мы можем направить
            оригинал справки. Если Вы хотите забрать самостоятельно, то в поле
            напишите Личный визит за документом
            <input
              className={`register__input ${
                isInputValid ? "" : "register__input_type_error"
              }`}
              name="adress"
              value={values.adress || ""}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              
              required
            ></input>
            <span
              className={`form__error form__error_type_register ${
                isValid ? "" : "form__error_type_active"
              }`}
            >
              {errors.adress}
            </span>
          </label>
          <button
            className="register__description register__description_type_blue register__description_type_submit"
            disabled={isValid ? false : true}
            type="submit"
          >
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
}

export default StudentСertificateOriginal;
