function GradeItem({el, showGrades}) {
  return (
    <li key={el.id} className={`home__grades-list ${showGrades ? "home__grades-list_active" : ""}`}>
      <h4 className="home__lesson mb-3">{el.item_name}</h4>
      <p>Оценка по пятибалльной системе: {el.grade}</p>
      <p>Оценка в баллах: {el.points}</p>
    </li>
  );
}

export default GradeItem;
