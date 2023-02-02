function RegisterStudent() {
  return (
    <div className="regiser">
      <h2>Регистрация ученика</h2>
      <p>
        Регистрацию необходимо пройти только один раз. Все последующие году
        проходить ее повторно не нужно.
      </p>
      <form className="regiser__form">
        <label>
          Фамилия, Имя, Отчество ученика* (поля с звездочкой обязательны для
          заполнения)
        </label>
        <input></input>

        <label>
          Укажите выделенный e-mail для создания Личного кабинета ученика на
          платформе ЦПСО*
        </label>
        <p>
          ВАЖНО! E-mail ученика не должен совпадать с e-mail родителя/куратора.
          Если Вы уже регистрировали этого ученика, пожалуйста, используйте тот
          же email, который использовали ранее.
        </p>
        <input></input>

        <label>
          Где проходили последнюю аттестацию?*
          <input type="radio"></input>
          <input type="radio"></input>
          <input type="radio"></input>
        </label>

        <p>Страна постоянного проживания ученика*</p>
        <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
        </select>

        <p>Регион постоянного проживания (только для РФ)*</p>
        <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
        </select>

        <label></label>
        <input></input>
      </form>
    </div>
  );
}

export default RegisterStudent;
