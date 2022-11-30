import React from "react";

function DeleteStudentPopup({ isOpen, onClose, onSubmit, isLoading }) {
  const close = process.env.PUBLIC_URL + "/close.svg";

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit();
  }

  return (
    <div className={`popup ${isOpen ? "popup_is-open" : ""} popup_type_info `}>
      <div className="popup__content popup__content_type_add popup__content_type_delete">
        <button
          type="button"
          onClick={onClose}
          className="popup__close"
          style={{ backgroundImage: `url(${close})` }}
        />
        <h3 className="popup__title popup__title_type_add popup__title_type_delete">Вы уверены?</h3>
        <form
          className="popup__form"
          action="#"
          name="add-student"
          onSubmit={handleSubmit}
          noValidate
        >
          <button
            className="popup__save popup__save_type_delete"
            type="submit"
            disabled={isLoading ? true : false}
          >
            {isLoading ? "Сохранение..." : "Да"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default DeleteStudentPopup;
