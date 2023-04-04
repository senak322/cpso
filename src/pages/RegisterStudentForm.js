import React from "react";
import BackButton from "../components/BackButton";
import useFormAndValidation from "../utils/useFormAndValidation.js";
import { countries, regions } from "../vendor/countries";

function RegisterStudentForm() {
  const formValues = {};

  const {
    values,
    handleChange,
    setValues,
    errors,
    isValid,
    handleBlur,
    isInputValid,
    handleChangeSelect,
    hadleChangeFiles,
    handleSubmitForm,
  } = useFormAndValidation();

  React.useEffect(() => {
    setValues(formValues);
  }, []);

  return (
    <div className="register">
      <div className="register__container">
        <h2 className="register__title">Анкета ученика</h2>
        <form className="register__form" onSubmit={handleSubmitForm}>
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
                isInputValid ? "" : "form__error_type_active"
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
            <label className="register__custom-radio">
              <input
                className="register__radio"
                id="cpso"
                value="cpso"
                name="school"
                type="radio"
                onChange={handleChange}
              ></input>
              <span>ЦПСО</span>
            </label>
            <label className="register__custom-radio">
              <input
                className="register__radio"
                id="not-cpso"
                value="not-cpso"
                name="school"
                type="radio"
                onChange={handleChange}
              ></input>
              <span>Не в ЦПСО</span>
            </label>
            <label className="register__custom-radio">
              <input
                className="register__radio"
                id="not-all"
                value="not-all"
                name="school"
                type="radio"
                onChange={handleChange}
              ></input>
              <span>Не проходил совсем</span>
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
                  <select
                    className="register__select"
                    value={values.school_name || "default"}
                    name="school_name"
                    onChange={handleChangeSelect}
                  >
                    <option value="ГБОУ Школа № 1505 Преображенская">
                      ГБОУ Школа № 1505 Преображенская
                    </option>
                    <option value="ОАНО СОШ Пенаты">ОАНО СОШ Пенаты</option>
                    <option value="ОАНО Школа НИКА">ОАНО Школа НИКА</option>
                    <option value="ГБОУ школа № 464">ГБОУ школа № 464</option>
                    <option value="ЧОУ Школа разговорных языков">
                      ЧОУ Школа разговорных языков
                    </option>
                    <option value="default">Нет данных</option>
                  </select>
                </>
              ) : (
                <>{(values.school_name = "")}</>
              )}
              <p className="register__label">
                Страна постоянного проживания ученика
                <span className="register__star">*</span>
              </p>
              <select
                className="register__select"
                name="coutnry"
                value={values.coutnry || "default"}
                onChange={handleChangeSelect}
              >
                <option value="default" disabled>
                  Выберите страну из списка
                </option>
                {countries.map((el, index) => {
                  return (
                    <option key={index} value={el}>
                      {el}
                    </option>
                  );
                })}
              </select>
              {values.coutnry === "Россия" ? (
                <>
                  <p className="register__label">
                    Регион постоянного проживания (только для РФ)
                    <span className="register__star">*</span>
                  </p>
                  <select
                    className="register__select"
                    name="region"
                    value={values.region || "default"}
                    onChange={handleChangeSelect}
                  >
                    <option value="default" disabled>
                      Выберите регион
                    </option>
                    {regions.map((el, index) => {
                      return (
                        <option key={index} value={el}>
                          {el}
                        </option>
                      );
                    })}
                  </select>{" "}
                </>
              ) : (
                ""
              )}
              <p className="register__label">
                Выберите пол ученика
                <span className="register__star">*</span>
              </p>
              <select
                className="register__select"
                name="gender"
                value={values.gender || "default"}
                onChange={handleChangeSelect}
              >
                <option value="default">Укажите пол ученика</option>
                <option value="m">М</option>
                <option value="w">Ж</option>
              </select>{" "}
              <label
                className="register__label register__label_type_date"
                htmlFor="birdth"
              >
                Укажите дату рождения ребенка
                <span className="register__star">*</span>
                <input
                  className="register__input"
                  name="birdth"
                  value={values.birdth || ""}
                  onChange={handleChange}
                  // onBlur={handleBlur}
                  id="birdth"
                  type="date"
                ></input>
              </label>
              <p className="register__label">
                Учебный год, на который приобретён пакет класса
                <span className="register__star">*</span>
              </p>
              <select
                className="register__select"
                name="learn_year"
                value={values.learn_year || "default"}
                onChange={handleChangeSelect}
              >
                <option value="default">Укажите учебный год</option>
                <option value="2022">2022/2023</option>
                <option value="2023">2023/2024</option>
              </select>
              <label className="register__label">
                Контактное лицо для информирования и общения (родитель/куратор)
                <span className="register__star">*</span>
                <p className="register__comment">
                  ФИО родителя (опекуна) или куратора группы.
                </p>
                <input
                  className={`register__input ${
                    isInputValid ? "" : "register__input_type_error"
                  }`}
                  name="contact_name"
                  value={values.contact_name || ""}
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
                  {errors.contact_name}
                </span>
              </label>
              <label className="register__label">
                E-mail контактного лица (родитель/куратора) для информирования и
                общения
                <span className="register__star">*</span>
                <p className="register__comment">
                  Укажите электронный адрес родителя или куратора группы
                </p>
                <input
                  className={`register__input ${
                    isInputValid ? "" : "register__input_type_error"
                  }`}
                  name="contact_email"
                  value={values.contact_email || ""}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="email"
                  placeholder="E-mail"
                  required
                ></input>
                <span
                  className={`form__error form__error_type_register ${
                    isValid ? "" : "form__error_type_active"
                  }`}
                >
                  {errors.contact_email}
                </span>
              </label>
              <label className="register__label">
                Телефон контактного лица (родителя/куратора) для информирования
                и общения
                <span className="register__star">*</span>
                <p className="register__comment">
                  Укажите номер телефона родителя или куратора группы.
                </p>
                <input
                  className={`register__input ${
                    isInputValid ? "" : "register__input_type_error"
                  }`}
                  name="contact_tel"
                  value={values.contact_tel || ""}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="tel"
                  placeholder="+7 (XXX) XXX XX XX"
                  required
                ></input>
                <span
                  className={`form__error form__error_type_register ${
                    isValid ? "" : "form__error_type_active"
                  }`}
                >
                  {errors.contact_tel}
                </span>
              </label>
              <div className="register__docs">
                <label className="register__label" htmlFor="application">
                  Заявление в школу<span className="register__star">*</span>
                  <p className="register__comment">
                    Просим прикрепить качественную копию заполненного документа
                    в формате PDF, а не фото с телефона. Шаблон заявления можно
                    скачать выше. Если у вас несколько страниц скан-копии
                    отдельными файлами, то вы можете прикрепить их все, выбрав
                    сразу несколько файлов.
                  </p>
                </label>
                <input
                  multiple
                  accept="image/*, .png, .jpg, .jpeg, .pdf"
                  name="application"
                  id="application"
                  type="file"
                  required
                  onChange={hadleChangeFiles}
                ></input>
                <a
                  className="register__link"
                  href="https://hssc-exam.ru/reg_form_23/blanks/examples/1505/Заявление.pdf"
                  rel="noreferrer"
                  target="_blank"
                >
                  Образец заявления
                </a>
              </div>
              <div className="register__docs">
                <label className="register__label" htmlFor="opd">
                  Согласие на обработку персональных данных
                  <span className="register__star">*</span>
                  <p className="register__comment">
                    Просим прикрепить качественную копию заполненного документа
                    в формате PDF, а не фото с телефона. Шаблон договора можно
                    скачать выше. Если у вас несколько страниц скан-копии
                    отдельными файлами, то вы можете прикрепить их все, выбрав
                    сразу несколько файлов.
                  </p>
                </label>
                <input
                  required
                  multiple
                  accept="image/*, .png, .jpg, .jpeg, .pdf"
                  name="opd"
                  id="opd"
                  type="file"
                  onChange={hadleChangeFiles}
                ></input>
                <a
                  className="register__link"
                  href="https://hssc-exam.ru/reg_form_23/blanks/examples/1505/Согласие.pdf"
                  rel="noreferrer"
                  target="_blank"
                >
                  Образец согласия на ОПД
                </a>
              </div>
              <div className="register__docs">
                <label className="register__label" htmlFor="old_school">
                  Документы (при их наличии), подтверждающие освоение
                  образовательных программ начального общего, основного общего,
                  среднего общего образования (скан-копия личного дела или
                  справки о промежуточной аттестации)
                  <p className="register__comment">
                    Просим прикрепить качественную копию документа в формате
                    PDF, а не фото с телефона. Если у вас несколько страниц
                    скан-копии отдельными файлами, то вы можете прикрепить их
                    все, выбрав сразу несколько файлов.
                  </p>
                </label>
                <input
                  multiple
                  accept="image/*, .png, .jpg, .jpeg, .pdf"
                  name="old_school"
                  id="old_school"
                  type="file"
                  onChange={hadleChangeFiles}
                ></input>
              </div>
              <div className="register__docs">
                <label className="register__label" htmlFor="attorney">
                  Доверенность на подачу документов
                  <span className="register__star">*</span>
                  <p className="register__comment">
                    Просим прикрепить качественную копию заполненного документа
                    в формате PDF, а не фото с телефона. Шаблон договора можно
                    скачать выше. Если у вас несколько страниц скан-копии
                    отдельными файлами, то вы можете прикрепить их все, выбрав
                    сразу несколько файлов.
                  </p>
                </label>
                <input
                  multiple
                  accept="image/*, .png, .jpg, .jpeg, .pdf"
                  name="attorney"
                  id="attorney"
                  type="file"
                  required
                  onChange={hadleChangeFiles}
                ></input>
                <a
                  className="register__link"
                  href="https://hssc-exam.ru/reg_form_23/blanks/examples/Доверенность.pdf"
                  rel="noreferrer"
                  target="_blank"
                >
                  Образец доверенности
                </a>
              </div>
              <label className="register__label">
                Номер Свидетельства о рождении ученика
                <span className="register__star">*</span>
                <p className="register__comment">
                  Укажите серию и номер Свидетельства о рождении ученика. Важно!
                  Даже при наличии паспорта, необходимо указать данные
                  свидетельства
                </p>
                <input
                  className={`register__input ${
                    isInputValid ? "" : "register__input_type_error"
                  }`}
                  name="birth_certificate"
                  value={values.birth_certificate || ""}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  placeholder="Cерия и номер Свидетельства о рождении"
                  required
                ></input>
                <span
                  className={`form__error form__error_type_register ${
                    isValid ? "" : "form__error_type_active"
                  }`}
                >
                  {errors.birth_certificate}
                </span>
              </label>
              <label
                className="register__label register__label_type_date"
                htmlFor="birth_certificate_date"
              >
                Укажите дату выдачи Свидетельства о рождении ученика
                <span className="register__star">*</span>
                <input
                  className="register__input"
                  name="birth_certificate_date"
                  value={values.birth_certificate_date || ""}
                  onChange={handleChange}
                  // onBlur={handleBlur}
                  id="birth_certificate_date"
                  type="date"
                ></input>
              </label>
              <label className="register__label">
                Кем выдано Свидетельство о рождении ученика
                <span className="register__star">*</span>
                <input
                  className={`register__input ${
                    isInputValid ? "" : "register__input_type_error"
                  }`}
                  name="birth_issued"
                  value={values.birth_issued || ""}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  placeholder="Кем выдано"
                  required
                ></input>
                <span
                  className={`form__error form__error_type_register ${
                    isValid ? "" : "form__error_type_active"
                  }`}
                >
                  {errors.birth_issued}
                </span>
              </label>
              <div className="register__docs">
                <label className="register__label" htmlFor="copy_birth">
                  Копия Свидетельства о рождении ученика
                  <span className="register__star">*</span>
                  <p className="register__comment">
                    Просим прикрепить качественную копию документа в формате
                    PDF, а не фото с телефона. Если у вас несколько страниц
                    скан-копии отдельными файлами, то вы можете прикрепить их
                    все, выбрав сразу несколько файлов.
                  </p>
                </label>
                <input
                  multiple
                  accept="image/*, .png, .jpg, .jpeg, .pdf"
                  name="copy_birth"
                  id="copy_birth"
                  type="file"
                  required
                  onChange={hadleChangeFiles}
                ></input>
              </div>
              <label className="register__label">
                Адрес регистрации ученика по месту жительства
                <span className="register__star">*</span>
                <input
                  className={`register__input ${
                    isInputValid ? "" : "register__input_type_error"
                  }`}
                  name="registration_address"
                  value={values.registration_address || ""}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  placeholder="123456, Россия, город Москва, улица Преображенская, дом 11, кв. 25"
                  required
                ></input>
                <span
                  className={`form__error form__error_type_register ${
                    isValid ? "" : "form__error_type_active"
                  }`}
                >
                  {errors.registration_address}
                </span>
              </label>
              <label className="register__label">
                ФИО родителя (законного представителя)
                <span className="register__star">*</span>
                <input
                  className={`register__input ${
                    isInputValid ? "" : "register__input_type_error"
                  }`}
                  name="parent_name"
                  value={values.parent_name || ""}
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
                  {errors.parent_name}
                </span>
              </label>
              <label className="register__label">
                Паспорт родителя (законного представителя)
                <span className="register__star">*</span>
                <input
                  className={`register__input ${
                    isInputValid ? "" : "register__input_type_error"
                  }`}
                  name="parent_passport_num"
                  value={values.parent_passport_num || ""}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  placeholder="Номер паспорта"
                  required
                ></input>
                <span
                  className={`form__error form__error_type_register ${
                    isValid ? "" : "form__error_type_active"
                  }`}
                >
                  {errors.parent_passport_num}
                </span>
              </label>
              <label
                className="register__label register__label_type_date"
                htmlFor="parent_passport_date"
              >
                Укажите дату выдачи Свидетельства о рождении ученика
                <span className="register__star">*</span>
                <input
                  className="register__input"
                  name="parent_passport_date"
                  value={values.parent_passport_date || ""}
                  onChange={handleChange}
                  // onBlur={handleBlur}
                  id="parent_passport_date"
                  type="date"
                ></input>
              </label>
              <label className="register__label">
                Кем выдан Паспорт родителя (законного представителя)
                <span className="register__star">*</span>
                <input
                  className={`register__input ${
                    isInputValid ? "" : "register__input_type_error"
                  }`}
                  name="parent_passport_issued"
                  value={values.parent_passport_issued || ""}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  placeholder="Номер паспорта"
                  required
                ></input>
                <span
                  className={`form__error form__error_type_register ${
                    isValid ? "" : "form__error_type_active"
                  }`}
                >
                  {errors.parent_passport_issued}
                </span>
              </label>
              <div className="register__docs">
                <label
                  className="register__label"
                  htmlFor="parent_passport_copy"
                >
                  Копия Паспорта родителя (законного представителя): первая
                  страница и страница с регистрацией
                  <span className="register__star">*</span>
                  <p className="register__comment">
                    Просим прикрепить качественную копию документа в формате
                    PDF, а не фото с телефона. Если у вас несколько страниц
                    скан-копии отдельными файлами, то вы можете прикрепить их
                    все, выбрав сразу несколько файлов.
                  </p>
                </label>
                <input
                  multiple
                  accept="image/*, .png, .jpg, .jpeg, .pdf"
                  name="parent_passport_copy"
                  id="parent_passport_copy"
                  type="file"
                  required
                  onChange={hadleChangeFiles}
                ></input>
              </div>
              <label className="register__label">
                Телефон родителя (законного представителя)
                <span className="register__star">*</span>
                <input
                  className={`register__input ${
                    isInputValid ? "" : "register__input_type_error"
                  }`}
                  name="parent_tel"
                  value={values.parent_tel || ""}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="tel"
                  placeholder="+7 (XXX) XXX XX XX"
                  required
                ></input>
                <span
                  className={`form__error form__error_type_register ${
                    isValid ? "" : "form__error_type_active"
                  }`}
                >
                  {errors.parent_tel}
                </span>
              </label>
              <label className="register__label">
                Электронная почта родителя (законного представителя)
                <span className="register__star">*</span>
                <input
                  className={`register__input ${
                    isInputValid ? "" : "register__input_type_error"
                  }`}
                  type="email"
                  name="parent_email"
                  placeholder="E-mail"
                  value={values.parent_email || ""}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                ></input>
                <span
                  className={`form__error form__error_type_register ${
                    isInputValid ? "" : "form__error_type_active"
                  }`}
                >
                  {errors.parent_email}
                </span>
              </label>
              <p className="register__text register__text_type_end">
                После того, как вы прикрепите все необходимые документы, просим
                вас еще раз проверить регистрационную форму и только после этого
                нажать кнопку{" "}
                <span style={{ fontWeight: 700 }}>
                  "Отправить данные в ЦПСО".
                </span>{" "}
                В течение суток мы проверим ваши документы и направим доступ на
                платформу.
              </p>
              <button
                className="register__description register__description_type_blue register__description_type_submit"
                disabled={isValid ? false : true}
                type="submit"
              >
                Отправить данные в ЦПСО
              </button>
            </>
          ) : (
            ""
          )}
        </form>
        {/* <Link
          className="register__description register__description_type_blue"
          to="/home/form-documents"
        >
          Далее <HiArrowNarrowRight />
        </Link> */}
        <BackButton />
      </div>
    </div>
  );
}

export default RegisterStudentForm;
