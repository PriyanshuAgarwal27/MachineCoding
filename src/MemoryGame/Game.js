import { useEffect, useState } from "react";
import "./MemoryGame.css";
import { data } from "./data";
import Card from "./Card";
const Game = () => {
  const [shuffledData, setShuffledData] = useState([]);
  const [count, setCount] = useState(0);
  const [firstSelectedItem, setFirstSelectedItem] = useState("");
  const [firstIndex, setFirstIndex] = useState("");
  const [secondIndex, setSecondIndex] = useState("");
  const [secondSelectedItem, setSecondSelectedItem] = useState("");
  const shuffle = (data) => {
    const shuffledArray = [...data];
    for (let i = shuffledArray.length - 1; i >= 0; --i) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };
  useEffect(() => {
    const shuffled = shuffle(data).map((card) => ({
      ...card,
      flipped: false,
      match: false,
    }));
    setShuffledData(shuffled);
  }, []);
  useEffect(() => {
    console.log(firstSelectedItem);
    console.log(secondSelectedItem);
    if (count > 2) {
      if (
        firstSelectedItem === secondSelectedItem &&
        firstSelectedItem !== ""
      ) {
        const updated = shuffledData.map((card, i) => {
          if (i == firstIndex || i == secondIndex) {
            return { ...card, match: true };
          }
          return card;
        });
        setShuffledData(updated);
      } else {
        const updated = shuffledData.map((card, i) => ({
          ...card,

          flipped: false,
        }));
        setShuffledData(updated);
      }
      setCount(0);
      setFirstSelectedItem("");
      setSecondSelectedItem("");
      setFirstIndex("");
      setSecondIndex("");
    }
  }, [count, firstSelectedItem, secondSelectedItem]);
  const handleCardClick = (index, id) => {
    if (shuffledData[index].matched || shuffledData[index].flipped) {
      return;
    }
    const updt = shuffledData.map((card, i) =>
      i == index ? { ...card, flipped: !card.flipped } : card
    );

    if (count == 0) {
      setFirstSelectedItem(id);
      setFirstIndex(index);
    }
    if (count == 1) {
      setSecondSelectedItem(id);
      setSecondIndex(index);
    }

    setCount(count + 1);
    setShuffledData(updt);
  };
  return (
    <div>
      <div className="display-grid">
        {shuffledData.map((box, index) => {
          return (
            <Card
              card={box}
              key={index}
              onClick={() => handleCardClick(index, box.id)}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Game;
