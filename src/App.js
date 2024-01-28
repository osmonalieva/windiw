import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <button className="window" onClick={openModal}>Открыть модальное окно</button>
      {modalIsOpen && (
        <div className="overlay">
          <div className="modal">
            <h2>Модальное окно</h2>
            <p>Содержимое модального окна...</p>
            <button onClick={closeModal}>Закрыть</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
