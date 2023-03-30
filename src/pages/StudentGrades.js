import { useParams } from "react-router-dom";
import { useEffect } from "react";

function StudentGrades({getGrades}) {
  let { classid, id } = useParams();

  useEffect(()=> {
    getGrades(id, classid)
    
  }, []);

  return (
    <section className="register">
      <div className="register__container">
        
        <h2 className="register__user-name">
            Статус аттестации ученика
          </h2>
      </div>
    </section>
  );
}

export default StudentGrades;
