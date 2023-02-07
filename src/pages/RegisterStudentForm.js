import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";
import { HiArrowNarrowRight } from "react-icons/hi";

function RegisterStudentForm() {
  return (
    <div className="regiser">
      <div className="register__container">
        <h2 className="register__title">Анкета ученика</h2>
        <form className="regiser__form">
          <label className="regiser__label">
            Фамилия, Имя, Отчество ученика
            <span className="regiser__star">*</span> (поля с звездочкой
            обязательны для заполнения)
            <input className="regiser__input" type="text"></input>
          </label>

          <label className="regiser__label">
            Укажите выделенный e-mail для создания Личного кабинета ученика на
            платформе ЦПСО<span className="regiser__star">*</span>
            <p className="regiser__text">
              <span style={{ fontWeight: 700 }}>ВАЖНО!</span> E-mail ученика не
              должен совпадать с e-mail родителя/куратора. Если Вы уже
              регистрировали этого ученика, пожалуйста, используйте тот же
              email, который использовали ранее.
            </p>
            <input className="regiser__input" type="email"></input>
          </label>

          <div className="register__container register__container_type_radio">
            <p className="regiser__label">
              Где проходили последнюю аттестацию?
              <span className="regiser__star">*</span>
            </p>
            <label>
              <input className="regiser__radio" id="cpso" value="cpso" name="school" type="radio"></input> 
              ЦПСО
            </label>
            <label>
              <input className="regiser__radio" id="not-cpso" value="not-cpso" name="school" type="radio"></input>
              Не в ЦПСО
            </label>
            <label>
              <input className="regiser__radio" id="not-all" value="not-all" name="school" type="radio"></input>
              Не проходил совсем
            </label>
          </div>

          <p className="regiser__label">
            Страна постоянного проживания ученика
            <span className="regiser__star">*</span>
          </p>
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>

          <p>
            Регион постоянного проживания (только для РФ)
            <span className="regiser__star">*</span>
          </p>
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>

          <label></label>
          <input></input>
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
