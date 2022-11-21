import React from "react";
// import world from '../images/world1.png';
// import quest from '../images/quest.png';

function Footer() {
  return (
    <footer
      className="footer"
      style={{
        backgroundImage:
          "url(https://hssc-exam.ru/theme/image.php/moove/theme/1663852834/footer-bg)",
      }}
    >
      <div className="footer__container">
        <ul className="footer__nav">
          <h2>Оставайтесь на связи</h2>
          <li>
            <a href="https://hss.center/" target="_blank" className="footer__link"><img className="footer__img" src={process.env.PUBLIC_URL + '/world1.png'} alt="ссылка на сайт"></img>
              Сайт ЦПСО
            </a>
          </li>
          <li className="footer__nav_link">
            <a href="https://hss.center/faq" target="_blank" className="footer__link"><img className="footer__img" src={process.env.PUBLIC_URL + '/quest.png'} alt="ссылка на faq"></img>
              Часто задаваемые вопросы (FAQ)
            </a>
          </li>
        </ul>
        <ul className="footer__nav">
          <li>
            <a href="https://575506.selcdn.ru/links/Политика%20конфиденциальности%20(Moodle).pdf" target="_blank" className="footer__link">
              Политика конфиденциальности
            </a>
          </li>
          <li className="footer__nav_link">
            <a href="https://hssc-exam.ru/files/educational_license_info.pdf" target="_blank" className="footer__link">
              Лицензия на образовательную деятельность
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
