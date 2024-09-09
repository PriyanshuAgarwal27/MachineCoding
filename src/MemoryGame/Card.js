import { useEffect, useState } from "react";
import "./MemoryGame.css";
const Card = ({ card, onClick, firstIndex }) => {
  console.log(firstIndex);
  return (
    <div className="card-container" onClick={onClick}>
      {card.flipped || card.match ? (
        card.match ? (
          <span>✔️</span>
        ) : (
          <span>{card?.id}</span>
        )
      ) : (
        <span>❓</span>
      )}
    </div>
  );
};
export default Card;
