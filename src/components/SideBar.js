import React from "react";
import { FaBars } from "react-icons/fa";
import { AiFillHome, AiFillSetting } from "react-icons/ai";
import { NavLink } from "react-router-dom";

function SideBar() {
  const [isActiveBar, setIsActiveBar] = React.useState(false);

  const setActive = ({ isActive }) => isActive ? "link_active" : "link";

  function handleToggle() {
    setIsActiveBar(!isActiveBar);
  }

  return (
    <nav className={`side-bar ${isActiveBar ? "side-bar_active" : ""}`}>
      <div className="side-bar__container">
        <FaBars
          className="side-bar__icon side-bar__icon_burger"
          onClick={handleToggle}
        />
      </div>
      <ul className="side-bar__nav">
        <li className="side-bar__container">
          <NavLink to="user-info" key="home" className={setActive}>
            <AiFillHome className="side-bar__icon" />
            {/* <p className="side-bar__name">Домой</p> */}
          </NavLink>
        </li>
        <li className="side-bar__container">
          <NavLink to="settings" key="settings" className={setActive}>
            <AiFillSetting className="side-bar__icon" />
            {/* <p className="side-bar__name">Настройки</p> */}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default SideBar;
