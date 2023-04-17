function GradeItem({ el }) {
  return (
    <li key={el.id} className="home__grades-list">
      <h4 className="home__lesson mb-3">{el.item_name}</h4>
      <p className="home__lesson-grade">
        Оценка по пятибалльной системе: {el.grade}
      </p>
      <p className="home__lesson-grade">Оценка в баллах: {el.points}</p>
    </li>
  );
}

export default GradeItem;
