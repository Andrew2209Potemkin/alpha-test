import React, { useEffect } from 'react';
import './App.css';
import Main from '../Main/Main';
import ImagePopup from '../ImagePopup/ImagePopup';
import { api } from '../../utils/api';

function App() {
  const [cards, setCards] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [isLikedCard, setIsLikedCard] = React.useState(false);

  function handleCardClick(selectedCard) {
    setSelectedCard(selectedCard);
  };

  function handleLikeClick(id) {
    let newCards = cards.map(el => {
      if (el.id === id) {
        return {
          ...el,
          liked: !el.liked,
        }
      }
      return el;
    })
    localStorage.setItem("cards", JSON.stringify(newCards));
    setCards(JSON.parse(localStorage.getItem("cards")));
  };

  function handleCardDelete(id) {
    let newList = [];
    for (const element of cards) {
      if (element.id !== id) {
        newList.push(element);
      }
      localStorage.setItem("cards", JSON.stringify(newList));
      setCards(JSON.parse(localStorage.getItem("cards")));
    }
  };

  function handleLikedCard() {
    setIsLikedCard(!isLikedCard);
    if (!isLikedCard) {
      let likeList = [];
      for (const element of cards) {
        if (element.liked === true) {
          likeList.push(element);
        }
      }
      localStorage.setItem("likedCards", JSON.stringify(likeList));
      setCards(JSON.parse(localStorage.getItem("likedCards")));
    } else {
      setCards(JSON.parse(localStorage.getItem("cards")));
    }
  };

  function closePopup() {
    setSelectedCard({});
  };

  useEffect(() => {
    api.getCards()
      .then((cards) => {
        let newList = [];
        for (const element of cards) {
          element.liked = false;
          element.title = "Кошки — самые популярные домашние животные на Земле";
          newList.push(element);
        }
        localStorage.setItem("cards", JSON.stringify(newList));
        setCards(JSON.parse(localStorage.getItem("cards")));
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  return (
    <>
      <div className="wrapper">
        <Main
          cards={cards}
          onCardClick={handleCardClick}
          onCardLike={handleLikeClick}
          onCardDelete={handleCardDelete}
          isLikedCard={isLikedCard}
          onFilterLikedCards={handleLikedCard}

        />
        <ImagePopup
          card={selectedCard}
          onClose={closePopup}
        />
      </div>
    </>

  );
}

export default App;
