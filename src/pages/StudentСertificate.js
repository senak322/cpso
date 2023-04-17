import { useParams, Outlet, Link } from "react-router-dom";
import BackButton from "../components/BackButton";

function StudentСertificate() {
  let { classid } = useParams();
  const studentEl = JSON.parse(localStorage.getItem("currentStudent"));
  return (
    <section className="register">
      <div className="register__container">
        <h1 className="register__add-header">{classid} класс</h1>

        <h2 className="register__user-name">
          {studentEl.lastname +
            " " +
            studentEl.firstname +
            " " +
            studentEl.middlename}
        </h2>
        <p className="register__certificate-discription">
          Аттестация за выбранный класс доступна. Войдите на платформу.
        </p>
        <a
          href="https://hssc-exam.ru/login/index.php"
          target="_blank"
          rel="noreferrer"
          className="register__certificate-link mb-3"
        >
          Справка о зачислении в школу
        </a>

        <a
          href="https://hssc-exam.ru/login/index.php"
          target="_blank"
          rel="noreferrer"
          className="register__certificate-link"
        >
          Справка с оценками
        </a>
        <div className="mt-5" style={{ display: "flex", alignItems: "center" }}>
          <BackButton />
          <Link to="original" style={{ textDecoration: "none" }}>
            <button className="register__add-btn">Запросить оригинал</button>
          </Link>
        </div>
        <Outlet />
      </div>
    </section>
  );
}

export default StudentСertificate;
