import BackButton from "../components/BackButton";

function RegisterStudentDocuments() {
  return (
    <div className="register">
      <div className="register__container">
        <h2 className="register__title">Документы ученика</h2>
        <p>Прикрепите документы</p>
        <button className="register__description register__description_type_blue">отправить</button>
        <BackButton />
      </div>
    </div>
  );
}

export default RegisterStudentDocuments;
