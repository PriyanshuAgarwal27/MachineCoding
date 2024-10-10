import { useEffect, useState } from "react";
import "./StarRating.css";

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  useEffect(() => {
    console.log(hoverRating);
  }, [hoverRating]);

  return (
    <>
      <div className="star-container">
        {[...Array(5)].map((num, index) => {
          return (
            <button
              key={index}
              onClick={() => setRating(index + 1)}
              onMouseEnter={() => {
                setHoverRating(index + 1);
              }}
              onMouseLeave={() => setHoverRating(rating)}
              className={`star-shape ${
                index + 1 <= ((rating && hoverRating) || hoverRating)
                  ? "on"
                  : "off"
              }`}
            >
              &#9733;
            </button>
          );
        })}
      </div>
    </>
  );
};
export default StarRating;
