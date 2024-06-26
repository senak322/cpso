import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";
import { HiArrowNarrowRight } from "react-icons/hi";
import { AiOutlineDoubleRight } from "react-icons/ai";

function RegisterStudent() {
  return (
    <div className="register">
      <div className="register__container">
        <h2 className="register__title">Регистрация ученика</h2>
        <p className="register__description register__description_type_grey">
          Прежде чем начнете проходить регистрацию ученика подготовьте документы
        </p>
        <ul className="register__description register__description_type_green">
          Перечень документов
          <li className="register__doc-link">
            <a
              className="register__link register__link_type_white"
              target="_blank"
              rel="noreferrer"
              href="https://hssc-exam.ru/reg_form_23/blanks/1505/Перечень%20документов%20для%20оформления%20на%20семейное%20обучение.pdf"
            >
              Скачать Перечень документов, которые необходимо представить в
              школу
              <AiOutlineDoubleRight className="register__double-arrow" />
            </a>
          </li>
          <li className="register__doc-link">
            <a
              className="register__link register__link_type_white"
              target="_blank"
              rel="noreferrer"
              href="https://hssc-exam.ru/reg_form_23/blanks/1505/Заявление%20на%20прикрепление%20СО%201505.pdf"
            >
              Скачать Заявление в школу (шаблон)
              <AiOutlineDoubleRight className="register__double-arrow" />
            </a>
          </li>
          <li className="register__doc-link">
            <a
              className="register__link register__link_type_white"
              target="_blank"
              rel="noreferrer"
              href="https://hssc-exam.ru/reg_form_23/blanks/1505/Согласие%20на%20обработку%20ПД%201505.pdf"
            >
              Скачать Согласие на обработку персональных данных (шаблон)
              <AiOutlineDoubleRight className="register__double-arrow" />
            </a>
          </li>
          <li className="register__doc-link">
            <a
              className="register__link register__link_type_white"
              target="_blank"
              rel="noreferrer"
              href="https://hssc-exam.ru/reg_form_23/blanks/Доверенность.pdf"
            >
              Скачать Доверенность на подачу документов (шаблон)
              <AiOutlineDoubleRight className="register__double-arrow" />
            </a>
          </li>
        </ul>
        <div style={{ display: "flex", alignItems: "center" }}>
          <BackButton />
          <Link
            className="register__add-btn"
            to="/home/form"
          >
            Далее
            <HiArrowNarrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RegisterStudent;
