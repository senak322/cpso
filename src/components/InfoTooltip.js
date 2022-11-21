import React from "react";


function InfoTooltip({ isOpen, isOk, onClose, message }) {
   const close = process.env.PUBLIC_URL + '/close.svg';
  return (
    <div className={`popup ${isOpen ? "popup_is-open" : ""} popup_type_info `}>
      <div className="popup__content popup__content_type_info">
        <button type="button" onClick={onClose} className="popup__close" style={{ backgroundImage: `url(${close})` }} />
        <img src={isOk ? "" : process.env.PUBLIC_URL + '/err.svg'}></img>
        <h3 className="popup__title popup__title_type_info">{message}</h3>
      </div>
    </div>
  );
}

export default InfoTooltip;
