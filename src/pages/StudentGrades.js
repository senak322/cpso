import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import CourseName from "../components/CourseName";
import BackButton from "../components/BackButton";

function StudentGrades({getCourses, courses, changeCourse}) {
  let { id } = useParams();

  useEffect(()=> {
    getCourses(id)
    
  }, [getCourses, id]);

  return (
    <section className="register">
      <div className="register__container">
        
        <h2 className="register__user-name mt-3">
            Статус аттестации ученика
          </h2>
          <p className="home__description">Доступные оценки:</p>
          <ul className="home__description">
          {courses.courses
            ? courses.courses.map((el) => {
                return (
                  <Link
                    className="home__link"
                    to={`/home/course${el.id}`}
                    key={el.id}
                  >
                    <CourseName el={el} changeCourse={changeCourse} />
                  </Link>
                );
              })
            : "Нет доступных курсов"}
        </ul>
        <BackButton />
      </div>
    </section>
  );
}

export default StudentGrades;
