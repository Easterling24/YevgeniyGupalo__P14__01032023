import React from "react";
import "../styles/confirmationModal.scss";

export default function ConfirmationModal(props) {
  const { employees, modalTriggered, setModalTriggered } = props;

  console.log(modalTriggered)

  return (
    <div className={modalTriggered ? "modal-wrapper" : "modal-wrapper-closed"}>
      <div className="modal-wrapper-container">
        <p>
          Employee {employees[employees.length - 1].firstName} has just been
          created
        </p>
        <button
          onClick={() => {
            setModalTriggered(false);
          }}
        >
          Got it !
        </button>
      </div>
    </div>
  );
}
