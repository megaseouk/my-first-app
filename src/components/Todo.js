import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [modalIsOpen, setmodalIsOpen] = useState(false);

  function deleteHandler() {
    setmodalIsOpen(true);
  }

  function closemodalHandler() {
    setmodalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && <Modal onCancel={closemodalHandler} onConfirm={closemodalHandler} />}
      {modalIsOpen && <Backdrop onCancel={closemodalHandler} />}
    </div>
  );
}

export default Todo;
