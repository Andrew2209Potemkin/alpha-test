import React from "react";
import "./Main.css"
import Card from "../Card/Card";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function Main({ cards, onCardClick, onCardLike, onCardDelete, onFilterLikedCards, isLikedCard }) {

  return (
    <main className="content">
      <FilterCheckbox
        onFilterLikedCards={onFilterLikedCards}
        isLikedCard={isLikedCard}
      />
      <section className="elements">
        {cards.map((card) => <Card key={card.id} card={card} onCardClick={onCardClick} onCardLike={onCardLike} onCardDelete={onCardDelete} />)}
      </section>
    </main>
  )
}

export default Main;

