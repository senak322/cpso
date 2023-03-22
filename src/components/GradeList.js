import { useState, useCallback } from "react";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import GradeItem from "./GradeItem";

function GradeList({ el }) {
  const [showGrades, setShowGrades] = useState(false);
  const cbToggleGrades = useCallback(() => {
    setShowGrades(!showGrades);
  }, [showGrades]);

  return (
    <li key={el.id}>
      <div className="home__grade-name" onClick={cbToggleGrades}>
        <h3 style={{ margin: 5 }}>{el.item}</h3>
        <AiOutlineArrowDown
          className={`${showGrades ? "active" : "disabled"}`}
        />
      </div>

      <ul className={`home__grade-container ${showGrades ? "home__grade-container_active" : ""}`}>
        {el.modules ? (
          el.modules.map((element) => {
            return (
              <GradeItem
                key={element.id}
                el={element}
                showGrades={showGrades}
              />
            );
          })
        ) : (
          <p>Оценок нет</p>
        )}
      </ul>
    </li>
  );
}

export default GradeList;
