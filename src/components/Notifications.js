import React, { useState, useRef } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";

function Notifications() {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <>
      <div ref={ref}>
        <Button
          onClick={handleClick}
          variant="light"
          className="header__notification p-1"
        >
          <IoMdNotificationsOutline className="header__notification_button" />
          <span className="header__notification_counter">0</span>
        </Button>

        <Overlay
          show={show}
          target={target}
          placement="bottom"
          container={ref}
          containerPadding={20}
        >
          <Popover id="popover-contained">
            <Popover.Header as="h3">Уведомления</Popover.Header>
            <Popover.Body>
              <strong>Новых уведомлений нет.</strong> Здесь будут отображаться
              Ваши уведомления
            </Popover.Body>
          </Popover>
        </Overlay>
      </div>
    </>
  );
}

export default Notifications;
