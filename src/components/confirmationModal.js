import React from "react";
import { useSelector } from "react-redux";
import "../styles/confirmationModal.scss";

export default function ConfirmationModal(props) {
  const { modalTriggered, setModalTriggered } = props;

  const {employees } = useSelector((state) => state.employee);
  const employee = employees[employees.length - 1];

  return (
    <div className={modalTriggered ? "modal-wrapper" : "modal-wrapper-closed"}>
      <div className="modal-wrapper-container">
        <p>
          Employee {employee.firstName} has just been
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