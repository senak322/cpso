import React from "react";
import { FaBars } from "react-icons/fa";
import { AiFillHome, AiFillSetting } from "react-icons/ai";
import { NavLink } from "react-router-dom";

function SideBar() {
  const [isActive, setIsActive] = React.useState(false);

  function handleToggle() {
    setIsActive(!isActive);
  }

  return (
    <nav className={`side-bar ${isActive ? "side-bar_active" : ""}`}>
      <div className="side-bar__container">
        <FaBars
          className="side-bar__icon side-bar__icon_burger"
          onClick={handleToggle}
        />
      </div>
      <ul className="side-bar__nav">
        <li className="side-bar__container">
          <NavLink
            to="/home/user-info"
            key="home"
            className="link"
            activeClassName="link_active"
          >
            <AiFillHome className="side-bar__icon" />
            <p className="side-bar__name">Домой</p>
          </NavLink>
        </li>
        <li className="side-bar__container">
          <NavLink
            to="/home/settings"
            key="settings"
            className="link"
            activeClassName="link_active"
          >
            <AiFillSetting className="side-bar__icon" />
            <p className="side-bar__name">Настройки</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default SideBar;
