import React from "react";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";
import { HiArrowNarrowRight } from "react-icons/hi";
import useFormAndValidation from "../utils/useFormAndValidation.js";

function RegisterStudentForm() {
  const formValues = {
    name: "",
    email: "",
  };

  const {
    values,
    handleChange,
    setValues,
    errors,
    isValid,
    handleBlur,
    isInputValid,
    handleChangeSelect,
  } = useFormAndValidation();

  React.useEffect(() => {
    setValues(formValues);
  }, []);

  return (
    <div className="register">
      <div className="register__container">
        <h2 className="register__title">Анкета ученика</h2>
        <form className="register__form">
          <label className="register__label">
            Фамилия, Имя, Отчество ученика
            <span className="register__star">*</span> (поля с звездочкой
            обязательны для заполнения)
            <input
              className={`register__input ${
                isInputValid ? "" : "register__input_type_error"
              }`}
              name="name"
              value={values.name || ""}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              placeholder="ФИО"
              required
            ></input>
            <span
              className={`form__error form__error_type_register ${
                isValid ? "" : "form__error_type_active"
              }`}
            >
              {errors.name}
            </span>
          </label>

          <label className="register__label">
            Укажите выделенный e-mail для создания Личного кабинета ученика на
            платформе ЦПСО<span className="register__star">*</span>
            <p className="register__text">
              <span style={{ fontWeight: 700 }}>ВАЖНО!</span> E-mail ученика не
              должен совпадать с e-mail родителя/куратора. Если Вы уже
              регистрировали этого ученика, пожалуйста, используйте тот же
              email, который использовали ранее.
            </p>
            <input
              className={`register__input ${
                isInputValid ? "" : "register__input_type_error"
              }`}
              type="email"
              name="email"
              placeholder="E-mail"
              value={values.email || ""}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            ></input>
            <span
              className={`form__error form__error_type_register ${
                isInputValid ? "" : "form__error_type_active"
              }`}
            >
              {errors.email}
            </span>
          </label>

          <div className="register__container register__container_type_radio">
            <p className="register__label">
              Где проходили последнюю аттестацию?
              <span className="register__star">*</span>
            </p>
            <label>
              <input
                className="register__radio"
                id="cpso"
                value="cpso"
                name="school"
                type="radio"
                onChange={handleChange}
              ></input>
              ЦПСО
            </label>
            <label>
              <input
                className="register__radio"
                id="not-cpso"
                value="not-cpso"
                name="school"
                type="radio"
                onChange={handleChange}
              ></input>
              Не в ЦПСО
            </label>
            <label>
              <input
                className="register__radio"
                id="not-all"
                value="not-all"
                name="school"
                type="radio"
                onChange={handleChange}
              ></input>
              Не проходил совсем
            </label>
          </div>
          {values.school ? (
            <>
              {values.school === "cpso" ? (
                <>
                  <p className="register__label">
                    Укажите, к какой школе был прикреплён ученик
                    <span className="register__star">*</span>
                  </p>
                  <select
                    className="register__select"
                    value={values.school_name || "default"}
                    name="school_name"
                    onChange={handleChangeSelect}
                  >
                    <option value="ГБОУ Школа № 1505 Преображенская">
                      ГБОУ Школа № 1505 Преображенская
                    </option>
                    <option value="ОАНО СОШ Пенаты">ОАНО СОШ Пенаты</option>
                    <option value="ОАНО Школа НИКА">ОАНО Школа НИКА</option>
                    <option value="ГБОУ школа № 464">ГБОУ школа № 464</option>
                    <option value="ЧОУ Школа разговорных языков">
                      ЧОУ Школа разговорных языков
                    </option>
                    <option value="default">Нет данных</option>
                  </select>
                </>
              ) : (
                <>{(values.school_name = "")}</>
              )}
              <p className="register__label">
                Страна постоянного проживания ученика
                <span className="register__star">*</span>
              </p>
              <select
                className="register__select"
                name="coutnry"
                value={values.coutnry || "default"}
                onChange={handleChangeSelect}
              >
                <option value="default">Выберите страну из списка</option>
                <option value="Россия">Россия</option>
                <option value="Абхазия">Абхазия</option>
                <option value="Австралия">Австралия</option>
                <option value="Австрия">Австрия</option>
                <option value="Азербайджан">Азербайджан</option>
                <option value="Албания">Албания</option>
                <option value="Алжир">Алжир</option>
                <option value="Ангола">Ангола</option>
                <option value="Андорра">Андорра</option>
                <option value="Антигуа и Барбуда">Антигуа и Барбуда</option>
                <option value="Аргентина">Аргентина</option>
                <option value="Армения">Армения</option>
                <option value="Афганистан">Афганистан</option>
                <option value="Багамские Острова">Багамские Острова</option>
                <option value="Бангладеш">Бангладеш</option>
                <option value="Барбадос">Барбадос</option>
                <option value="Бахрейн">Бахрейн</option>
                <option value="Беларусь">Беларусь</option>
                <option value="Белиз">Белиз</option>
                <option value="Бельгия">Бельгия</option>
                <option value="Бенин">Бенин</option>
                <option value="Болгария">Болгария</option>
                <option value="Боливия">Боливия</option>
                <option value="Босния и Герцеговина">
                  Босния и Герцеговина
                </option>
                <option value="Ботсвана">Ботсвана</option>
                <option value="Бразилия">Бразилия</option>
                <option value="Бруней">Бруней</option>
                <option value="Буркина-Фасо">Буркина-Фасо</option>
                <option value="Бурунди">Бурунди</option>
                <option value="Бутан">Бутан</option>
                <option value="Вануату">Вануату</option>
                <option value="Великобритания">Великобритания</option>
                <option value="Венгрия">Венгрия</option>
                <option value="Венесуэла">Венесуэла</option>
                <option value="Восточный Тимор">Восточный Тимор</option>
                <option value="Вьетнам">Вьетнам</option>
                <option value="Габон">Габон</option>
                <option value="Республика Гаити">Республика Гаити</option>
                <option value="Гайана">Гайана</option>
                <option value="Гамбия">Гамбия</option>
                <option value="Гана">Гана</option>
                <option value="Гватемала">Гватемала</option>
                <option value="Гвинея">Гвинея</option>
                <option value="Гвинея-Бисау">Гвинея-Бисау</option>
                <option value="Германия">Германия</option>
                <option value="Гондурас">Гондурас</option>
                <option value="Гренада">Гренада</option>
                <option value="Греция">Греция</option>
                <option value="Грузия">Грузия</option>
                <option value="Дания">Дания</option>
                <option value="Джибути">Джибути</option>
                <option value="Доминика">Доминика</option>
                <option value="Доминиканская Республика">
                  Доминиканская Республика
                </option>
                <option value="Египет">Египет</option>
                <option value="Замбия">Замбия</option>
                <option value="Зимбабве">Зимбабве</option>
                <option value="Израиль">Израиль</option>
                <option value="Индия">Индия</option>
                <option value="Индонезия">Индонезия</option>
                <option value="Иордания">Иордания</option>
                <option value="Ирак">Ирак</option>
                <option value="Иран">Иран</option>
                <option value="Ирландия">Ирландия</option>
                <option value="Исландия">Исландия</option>
                <option value="Испания">Испания</option>
                <option value="Италия">Италия</option>
                <option value="Йемен">Йемен</option>
                <option value="Кабо-Верде">Кабо-Верде</option>
                <option value="Казахстан">Казахстан</option>
                <option value="Камбоджа">Камбоджа</option>
                <option value="Камерун">Камерун</option>
                <option value="Канада">Канада</option>
                <option value="Катар">Катар</option>
                <option value="Кения">Кения</option>
                <option value="Республика Кипр">Республика Кипр</option>
                <option value="Киргизия">Киргизия</option>
                <option value="Кирибати">Кирибати</option>
                <option value="Китай">Китай</option>
                <option value="Колумбия">Колумбия</option>
                <option value="Коморы">Коморы</option>
                <option value="Республика Конго">Республика Конго</option>
                <option value="Демократическая Республика Конго">
                  Демократическая Республика Конго
                </option>
                <option value="Корейская Народно-Демократическая Республика">
                  Корейская Народно-Демократическая Республика
                </option>
                <option value="Республика Корея">Республика Корея</option>
                <option value="Коста-Рика">Коста-Рика</option>
                <option value="Кот-д’Ивуар">Кот-д’Ивуар</option>
                <option value="Куба">Куба</option>
                <option value="Кувейт">Кувейт</option>
                <option value="Лаос">Лаос</option>
                <option value="Латвия">Латвия</option>
                <option value="Лесото">Лесото</option>
                <option value="Либерия">Либерия</option>
                <option value="Ливан">Ливан</option>
                <option value="Ливия">Ливия</option>
                <option value="Литва">Литва</option>
                <option value="Лихтенштейн">Лихтенштейн</option>
                <option value="Люксембург">Люксембург</option>
                <option value="Маврикий">Маврикий</option>
                <option value="Мавритания">Мавритания</option>
                <option value="Мадагаскар">Мадагаскар</option>
                <option value="Малави">Малави</option>
                <option value="Малайзия">Малайзия</option>
                <option value="Мали">Мали</option>
                <option value="Мальдивы">Мальдивы</option>
                <option value="Мальта">Мальта</option>
                <option value="Марокко">Марокко</option>
                <option value="Маршалловы Острова">Маршалловы Острова</option>
                <option value="Мексика">Мексика</option>
                <option value="Мозамбик">Мозамбик</option>
                <option value="Молдавия">Молдавия</option>
                <option value="Монако">Монако</option>
                <option value="Монголия">Монголия</option>
                <option value="Мьянма">Мьянма</option>
                <option value="Намибия">Намибия</option>
                <option value="Науру">Науру</option>
                <option value="Непал">Непал</option>
                <option value="Нигер">Нигер</option>
                <option value="Нигерия">Нигерия</option>
                <option value="Нидерланды">Нидерланды</option>
                <option value="Никарагуа">Никарагуа</option>
                <option value="Новая Зеландия">Новая Зеландия</option>
                <option value="Норвегия">Норвегия</option>
                <option value="Объединённые Арабские Эмираты">
                  Объединённые Арабские Эмираты
                </option>
                <option value="Оман">Оман</option>
                <option value="Пакистан">Пакистан</option>
                <option value="Палау">Палау</option>
                <option value="Панама">Панама</option>
                <option value="Папуа — Новая Гвинея">
                  Папуа — Новая Гвинея
                </option>
                <option value="Парагвай">Парагвай</option>
                <option value="Перу">Перу</option>
                <option value="Польша">Польша</option>
                <option value="Португалия">Португалия</option>
                <option value="Руанда">Руанда</option>
                <option value="Румыния">Румыния</option>
                <option value="Сальвадор">Сальвадор</option>
                <option value="Самоа">Самоа</option>
                <option value="Сан-Марино">Сан-Марино</option>
                <option value="Сан-Томе и Принсипи">Сан-Томе и Принсипи</option>
                <option value="Саудовская Аравия">Саудовская Аравия</option>
                <option value="Северная Македония">Северная Македония</option>
                <option value="Сейшельские Острова">Сейшельские Острова</option>
                <option value="Сенегал">Сенегал</option>
                <option value="Сент-Винсент и Гренадины">
                  Сент-Винсент и Гренадины
                </option>
                <option value="Сент-Китс и Невис">Сент-Китс и Невис</option>
                <option value="Сент-Люсия">Сент-Люсия</option>
                <option value="Сербия">Сербия</option>
                <option value="Сингапур">Сингапур</option>
                <option value="Сирия">Сирия</option>
                <option value="Словакия">Словакия</option>
                <option value="Словения">Словения</option>
                <option value="Соединённые Штаты Америки">
                  Соединённые Штаты Америки
                </option>
                <option value="Соломоновы Острова">Соломоновы Острова</option>
                <option value="Сомали">Сомали</option>
                <option value="Судан">Судан</option>
                <option value="Суринам">Суринам</option>
                <option value="Сьерра-Леоне">Сьерра-Леоне</option>
                <option value="Таджикистан">Таджикистан</option>
                <option value="Таиланд">Таиланд</option>
                <option value="Танзания">Танзания</option>
                <option value="Того">Того</option>
                <option value="Тонга">Тонга</option>
                <option value="Тринидад и Тобаго">Тринидад и Тобаго</option>
                <option value="Тувалу">Тувалу</option>
                <option value="Тунис">Тунис</option>
                <option value="Туркмения">Туркмения</option>
                <option value="Турция">Турция</option>
                <option value="Уганда">Уганда</option>
                <option value="Узбекистан">Узбекистан</option>
                <option value="Украина">Украина</option>
                <option value="Уругвай">Уругвай</option>
                <option value="Федеративные Штаты Микронезии">
                  Федеративные Штаты Микронезии
                </option>
                <option value="Фиджи">Фиджи</option>
                <option value="Филиппины">Филиппины</option>
                <option value="Финляндия">Финляндия</option>
                <option value="Франция">Франция</option>
                <option value="Хорватия">Хорватия</option>
                <option value="Центральноафриканская Республика">
                  Центральноафриканская Республика
                </option>
                <option value="Чад">Чад</option>
                <option value="Черногория">Черногория</option>
                <option value="Чехия">Чехия</option>
                <option value="Чили">Чили</option>
                <option value="Швейцария">Швейцария</option>
                <option value="Швеция">Швеция</option>
                <option value="Шри-Ланка">Шри-Ланка</option>
                <option value="Эквадор">Эквадор</option>
                <option value="Экваториальная Гвинея">
                  Экваториальная Гвинея
                </option>
                <option value="Эритрея">Эритрея</option>
                <option value="Эсватини">Эсватини</option>
                <option value="Эстония">Эстония</option>
                <option value="Эфиопия">Эфиопия</option>
                <option value="Южно-Африканская Республика">
                  Южно-Африканская Республика
                </option>
                <option value="Южная Осетия">Южная Осетия</option>
                <option value="Южный Судан">Южный Судан</option>
                <option value="Ямайка">Ямайка</option>
                <option value="Япония">Япония</option>
              </select>
              {values.coutnry === "Россия" ? (
                <>
                  <p className="register__label">
                    Регион постоянного проживания (только для РФ)
                    <span className="register__star">*</span>
                  </p>
                  <select
                    className="register__select"
                    name="region"
                    value={values.region || "default"}
                    onChange={handleChangeSelect}
                  >
                    <option value="default">Выберите регион</option>
                    <option value="Москва">Москва</option>
                    <option value="Московская область">
                      Московская область
                    </option>
                    <option value="Алтайский край">Алтайский край</option>
                    <option value="Амурская область">Амурская область</option>
                    <option value="Архангельская область">
                      Архангельская область
                    </option>
                    <option value="Астраханская область">
                      Астраханская область
                    </option>
                    <option value="Белгородская область">
                      Белгородская область
                    </option>
                    <option value="Брянская область">Брянская область</option>
                    <option value="Владимирская область">
                      Владимирская область
                    </option>
                    <option value="Волгоградская область">
                      Волгоградская область
                    </option>
                    <option value="Вологодская область">
                      Вологодская область
                    </option>
                    <option value="Воронежская область">
                      Воронежская область
                    </option>
                    <option value="Еврейская автономная область">
                      Еврейская автономная область
                    </option>
                    <option value="Забайкальский край">
                      Забайкальский край
                    </option>
                    <option value="Ивановская область">
                      Ивановская область
                    </option>
                    <option value="Иркутская область">Иркутская область</option>
                    <option value="Кабардино-Балкарская республика">
                      Кабардино-Балкарская республика
                    </option>
                    <option value="Калининградская область">
                      Калининградская область
                    </option>
                    <option value="Калужская область">Калужская область</option>
                    <option value="Камчатский край">Камчатский край</option>
                    <option value="Карачаево-Черкесская республика">
                      Карачаево-Черкесская республика
                    </option>
                    <option value="Кемеровская область">
                      Кемеровская область
                    </option>
                    <option value="Кировская область">Кировская область</option>
                    <option value="Костромская область">
                      Костромская область
                    </option>
                    <option value="Краснодарский край">
                      Краснодарский край
                    </option>
                    <option value="Красноярский край">Красноярский край</option>
                    <option value="Курганская область">
                      Курганская область
                    </option>
                    <option value="Курская область">Курская область</option>
                    <option value="Ленинградская область">
                      Ленинградская область
                    </option>
                    <option value="Липецкая область">Липецкая область</option>
                    <option value="Магаданская область">
                      Магаданская область
                    </option>
                    <option value="Мурманская область">
                      Мурманская область
                    </option>
                    <option value="Ненецкий автономный округ">
                      Ненецкий автономный округ
                    </option>
                    <option value="Нижегородская область">
                      Нижегородская область
                    </option>
                    <option value="Новгородская область">
                      Новгородская область
                    </option>
                    <option value="Новосибирская область">
                      Новосибирская область
                    </option>
                    <option value="Омская область">Омская область</option>
                    <option value="Оренбургская область">
                      Оренбургская область
                    </option>
                    <option value="Орловская область">Орловская область</option>
                    <option value="Пензенская область">
                      Пензенская область
                    </option>
                    <option value="Пермский край">Пермский край</option>
                    <option value="Приморский край">Приморский край</option>
                    <option value="Псковская область">Псковская область</option>
                    <option value="Республика Адыгея">Республика Адыгея</option>
                    <option value="Республика Алтай">Республика Алтай</option>
                    <option value="Республика Башкортостан">
                      Республика Башкортостан
                    </option>
                    <option value="Республика Бурятия">
                      Республика Бурятия
                    </option>
                    <option value="Республика Дагестан">
                      Республика Дагестан
                    </option>
                    <option value="Республика Ингушетия">
                      Республика Ингушетия
                    </option>
                    <option value="Республика Калмыкия">
                      Республика Калмыкия
                    </option>
                    <option value="Республика Карелия">
                      Республика Карелия
                    </option>
                    <option value="Республика Коми">Республика Коми</option>
                    <option value="Республика Крым">Республика Крым</option>
                    <option value="Республика Марий Эл">
                      Республика Марий Эл
                    </option>
                    <option value="Республика Мордовия">
                      Республика Мордовия
                    </option>
                    <option value="Республика Саха (Якутия)">
                      Республика Саха (Якутия)
                    </option>
                    <option value="Республика Северная Осетия">
                      Республика Северная Осетия
                    </option>
                    <option value="Республика Татарстан">
                      Республика Татарстан
                    </option>
                    <option value="Республика Тыва">Республика Тыва</option>
                    <option value="Республика Хакасия">
                      Республика Хакасия
                    </option>
                    <option value="Ростовская область">
                      Ростовская область
                    </option>
                    <option value="Рязанская область">Рязанская область</option>
                    <option value="Самарская область">Самарская область</option>
                    <option value="Санкт-Петербург">Санкт-Петербург</option>
                    <option value="Саратовская область">
                      Саратовская область
                    </option>
                    <option value="Сахалинская область">
                      Сахалинская область
                    </option>
                    <option value="Свердловская область">
                      Свердловская область
                    </option>
                    <option value="Севастополь">Севастополь</option>
                    <option value="Смоленская область">
                      Смоленская область
                    </option>
                    <option value="Ставропольский край">
                      Ставропольский край
                    </option>
                    <option value="Тамбовская область">
                      Тамбовская область
                    </option>
                    <option value="Тверская область">Тверская область</option>
                    <option value="Томская область">Томская область</option>
                    <option value="Тульская область">Тульская область</option>
                    <option value="Тюменская область">Тюменская область</option>
                    <option value="Удмурдская республика">
                      Удмурдская республика
                    </option>
                    <option value="Ульяновская область">
                      Ульяновская область
                    </option>
                    <option value="Хабаровский край">Хабаровский край</option>
                    <option value="Ханты-Мансийский автономный округ">
                      Ханты-Мансийский автономный округ
                    </option>
                    <option value="Челябинская область">
                      Челябинская область
                    </option>
                    <option value="Чеченская республика">
                      Чеченская республика
                    </option>
                    <option value="Чувашская республика">
                      Чувашская республика
                    </option>
                    <option value="Чукотский автономный округ">
                      Чукотский автономный округ
                    </option>
                    <option value="Ямало-Ненецкий автономный округ">
                      Ямало-Ненецкий автономный округ
                    </option>
                    <option value="Ярославская область">
                      Ярославская область
                    </option>
                    <option value="Другая страна">Другая страна</option>
                  </select>{" "}
                </>
              ) : (
                ""
              )}
              <p className="register__label">
                Выберите пол ученика
                <span className="register__star">*</span>
              </p>
              <select
                className="register__select"
                name="gender"
                value={values.gender || "default"}
                onChange={handleChangeSelect}
              >
                <option value="default">Укажите пол ученика</option>
                <option value="m">М</option>
                <option value="w">Ж</option>
              </select>{" "}
              <label
                className="register__label register__label_type_date"
                htmlFor="birdth"
              >
                Укажите дату рождения ребенка
                <span className="register__star">*</span>
                <input
                  className="register__input"
                  name="birdth"
                  value={values.birdth || ""}
                  onChange={handleChange}
                  // onBlur={handleBlur}
                  id="birdth"
                  type="date"
                ></input>
              </label>
              <p className="register__label">
                Учебный год, на который приобретён пакет класса
                <span className="register__star">*</span>
              </p>
              <select
                className="register__select"
                name="learn_year"
                value={values.learn_year || "default"}
                onChange={handleChangeSelect}
              >
                <option value="default">Укажите учебный год</option>
                <option value="2022">2022/2023</option>
                <option value="2023">2023/2024</option>
              </select>
              <label className="register__label">
                Контактное лицо для информирования и общения (родитель/куратор)
                <span className="register__star">*</span>
                <p className="register__comment">
                  ФИО родителя (опекуна) или куратора группы.
                </p>
                <input
                  className={`register__input ${
                    isInputValid ? "" : "register__input_type_error"
                  }`}
                  name="contact_name"
                  value={values.contact_name || ""}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  placeholder="ФИО"
                  required
                ></input>
                <span
                  className={`form__error form__error_type_register ${
                    isValid ? "" : "form__error_type_active"
                  }`}
                >
                  {errors.contact_name}
                </span>
              </label>
              <label className="register__label">
                E-mail контактного лица (родитель/куратора) для информирования и
                общения
                <span className="register__star">*</span>
                <p className="register__comment">
                  Укажите электронный адрес родителя или куратора группы
                </p>
                <input
                  className={`register__input ${
                    isInputValid ? "" : "register__input_type_error"
                  }`}
                  name="contact_email"
                  value={values.contact_email || ""}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="email"
                  placeholder="E-mail"
                  required
                ></input>
                <span
                  className={`form__error form__error_type_register ${
                    isValid ? "" : "form__error_type_active"
                  }`}
                >
                  {errors.contact_email}
                </span>
              </label>
              <label className="register__label">
                Телефон контактного лица (родителя/куратора) для информирования
                и общения
                <span className="register__star">*</span>
                <p className="register__comment">
                  Укажите номер телефона родителя или куратора группы.
                </p>
                <input
                  className={`register__input ${
                    isInputValid ? "" : "register__input_type_error"
                  }`}
                  name="contact_tel"
                  value={values.contact_tel || ""}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="let"
                  placeholder="+7 (XXX) XXX XX XX"
                  required
                ></input>
                <span
                  className={`form__error form__error_type_register ${
                    isValid ? "" : "form__error_type_active"
                  }`}
                >
                  {errors.contact_tel}
                </span>
              </label>
            </>
          ) : (
            ""
          )}
        </form>
        <Link
          className="register__description register__description_type_blue"
          to="/home/form-documents"
        >
          Далее <HiArrowNarrowRight />
        </Link>
        <BackButton />
      </div>
    </div>
  );
}

export default RegisterStudentForm;
