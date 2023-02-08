import React from "react";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";
import { HiArrowNarrowRight } from "react-icons/hi";
import useFormAndValidation from "../utils/useFormAndValidation.js";

function RegisterStudentForm() {
  const formValues = {
    name: "",
    email: "",
  };

  const { values, handleChange, setValues, errors, isValid, handleBlur, isInputValid } =
    useFormAndValidation();


  React.useEffect(() => {
    setValues(formValues);
  }, []);

  return (
    <div className="register">
      <div className="register__container">
        <h2 className="register__title">Анкета ученика</h2>
        <form className="register__form">
          <label className="register__label">
            Фамилия, Имя, Отчество ученика
            <span className="register__star">*</span> (поля с звездочкой
            обязательны для заполнения)
            <input
              className={`register__input ${
                isInputValid ? "" : "register__input_type_error"
              }`}
              name="name"
              value={values.name || ""}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              placeholder="ФИО"
              required
            ></input>
            <span
              className={`form__error form__error_type_register ${
                isValid ? "" : "form__error_type_active"
              }`}
            >
              {errors.name}
            </span>
          </label>

          <label className="register__label">
            Укажите выделенный e-mail для создания Личного кабинета ученика на
            платформе ЦПСО<span className="register__star">*</span>
            <p className="register__text">
              <span style={{ fontWeight: 700 }}>ВАЖНО!</span> E-mail ученика не
              должен совпадать с e-mail родителя/куратора. Если Вы уже
              регистрировали этого ученика, пожалуйста, используйте тот же
              email, который использовали ранее.
            </p>
            <input
              className={`register__input ${
                isInputValid ? "" : "register__input_type_error"
              }`}
              type="email"
              name="email"
              placeholder="E-mail"
              value={values.email || ""}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            ></input>
            <span
              className={`form__error form__error_type_register ${
                isValid ? "" : "form__error_type_active"
              }`}
            >
              {errors.email}
            </span>
          </label>

          <div className="register__container register__container_type_radio">
            <p className="register__label">
              Где проходили последнюю аттестацию?
              <span className="register__star">*</span>
            </p>
            <label>
              <input
                className="register__radio"
                id="cpso"
                value="cpso"
                name="school"
                type="radio"
                onChange={handleChange}
              ></input>
              ЦПСО
            </label>
            <label>
              <input
                className="register__radio"
                id="not-cpso"
                value="not-cpso"
                name="school"
                type="radio"
                onChange={handleChange}
              ></input>
              Не в ЦПСО
            </label>
            <label>
              <input
                className="register__radio"
                id="not-all"
                value="not-all"
                name="school"
                type="radio"
                onChange={handleChange}
              ></input>
              Не проходил совсем
            </label>
          </div>
          {values.school ? (
            <>
              {values.school === "cpso" ? (
                <>
                  <p className="register__label">
                    Укажите, к какой школе был прикреплён ученик
                    <span className="register__star">*</span>
                  </p>
                  <select className="register__select">
                    <option>Школа 1</option>
                    <option>Школа 2</option>
                    <option>Школа 3</option>
                    <option>Школа 4</option>
                  </select>
                </>
              ) : (
                ""
              )}
              <p className="register__label">
                Страна постоянного проживания ученика
                <span className="register__star">*</span>
              </p>
              <select className="register__select">
                <option>РФ</option>
                <option>Белоруссия</option>
                <option>Украина</option>
                <option>Узбекистан</option>
              </select>
              <p className="register__label">
                Регион постоянного проживания (только для РФ)
                <span className="register__star">*</span>
              </p>
              <select className="register__select">
                <option>Москва</option>
                <option>Санкт-петербург</option>
                <option>Пермь</option>
                <option>Хабаровск</option>
              </select>{" "}
            </>
          ) : (
            ""
          )}
        </form>
        <Link
          className="register__description register__description_type_blue"
          to="/home/form-documents"
        >
          Далее <HiArrowNarrowRight />
        </Link>
        <BackButton />
      </div>
    </div>
  );
}

export default RegisterStudentForm;
