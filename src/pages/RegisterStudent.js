import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";
import { HiArrowNarrowRight } from "react-icons/hi";

function RegisterStudent() {
  return (
    <div className="register">
      <div className="register__container">
        <h2 className="register__title">Регистрация ученика</h2>
        <p className="register__description">
          Прежде чем начнете проходить регистрацию ученика подготовьте документы
        </p>
        <p className="register__description register__description_type_green">
          Перечень документов
        </p>
        <Link
          className="register__description register__description_type_blue"
          to="/home/form"
        >
          Далее
          <HiArrowNarrowRight />
        </Link>
        <BackButton />
      </div>
    </div>
  );
}

export default RegisterStudent;
