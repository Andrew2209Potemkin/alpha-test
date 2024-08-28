import React from "react";
import './Card.css';

function Card({ card, onCardClick, onCardLike, onCardDelete }) {

  function handleClick() {
    onCardClick(card);
  };

  function handleLikeClick() {
    onCardLike(card.id);
  };

  function handleCardDelete() {
    onCardDelete(card.id)
  };

  return (
    <article className="element">
      <button className="element__delete-icon-btn" aria-label="Удалить" type="button" onClick={handleCardDelete} />
      <img src={card.url} alt="#" className="element__image" onClick={handleClick} />
      <div className="element__title-zone">
        <h2 className="element__title">{card.title}</h2>
        <div className="element__like-zone">
          <button className={`element__like-icon-btn ${card.liked && 'element__like-icon-btn_active'}`} aria-label="Нравится" type="button" onClick={handleLikeClick} />
        </div>
      </div>
    </article>
  )
}

export default Card;
