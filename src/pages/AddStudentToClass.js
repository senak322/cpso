import { useEffect } from "react";
import BackButton from "../components/BackButton";
import { useParams } from "react-router-dom";
import useFormAndValidation from "../utils/useFormAndValidation.js";

function AddStudentToClass() {
  let { classid } = useParams();

  const studentEl = JSON.parse(localStorage.getItem("currentStudent"));

  const { values, setValues, handleChangeSelect, handleSubmitForm, resetForm } =
    useFormAndValidation();

  useEffect(() => {
    const formValues = {};
    setValues(formValues);
    resetForm()
  }, [resetForm, setValues]);


  return (
    <section className="register">
      <div className="register__container">
        <h1 className="register__add-header">{classid} класс</h1>
        <form className="register__form" onSubmit={handleSubmitForm}>
          <p className="register__add-description">
            Ученик, который будет прикреплен к данному классу:
          </p>
          <h2 className="register__user-name">{studentEl.lastname + " " + studentEl.firstname + " " + studentEl.middlename}</h2>
          <p className="register__add-description">
            Выберите школу для прикрепления
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
            <option value="default" disabled>
              Нет данных
            </option>
          </select>
        </form>
        <div style={{ display: "flex", alignItems: "center" }}>
          <BackButton />
          <button className="register__add-btn">Прикрепить</button>
        </div>
      </div>
    </section>
  );
}

export default AddStudentToClass;
