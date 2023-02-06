import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";

function RegisterStudent() {
  return (
    <div className="regiser">
      <h2>Регистрация ученика</h2>
      <p>
      Прежде чем начнете проходить регистрацию ученика подготовьте документы
      </p>
      <p>Перечень документов</p>
      <Link to="/home/form">Далее</Link>
      <BackButton />
    </div>
  );
}

export default RegisterStudent;

