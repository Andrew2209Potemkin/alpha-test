import React from "react";
import "./ImagePopup.css";

function ImagePopup({ card, onClose }) {
  return (
    <div className={`popup ${card.url ? 'popup_opened' : ''}`} >
      <div className="popup__container-image">
        <figure className="popup__figure">
          <img src={card.url} alt="#" className="popup__figure-image" />
          <figcaption className="popup__caption">{card.title}</figcaption>
        </figure>
        <button className="popup__close-btn" type="button" aria-label="Закрыть" onClick={onClose} />
      </div>
    </div>
  );
}

export default ImagePopup;
