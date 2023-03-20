import {AiOutlineArrowUp, AiOutlineArrowDown} from "react-icons/ai";
import GradeItem from "./GradeItem";

function GradeList({el, toggleGrades, showGrades}) {
  return (
    <li key={el.id}>
      <div className="home__grade-name" onClick={toggleGrades}>
        <h3 style={{ margin: 5 }}>{el.item}</h3>
        <AiOutlineArrowUp />
      </div>

      <ul>
        {el.modules ? (
          el.modules.map((element) => {
            return <GradeItem el={element} showGrades={showGrades} />;
          })
        ) : (
          <p>Оценок нет</p>
        )}
      </ul>
    </li>
  );
}

export default GradeList;
