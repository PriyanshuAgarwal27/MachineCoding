import "./Carousel.css";
import { useEffect, useRef, useState } from "react";
import DisplayImage from "./DispalyImage.js";
import imageData from "./imageData.js";
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isUserInteracting, setIsUserInterating] = useState(false);
  const timoutRef = useRef(null);
  const intervalRef = useRef(null);
  const clearIntervalFunc = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };
  const restartAutoSlide = () => {
    clearIntervalFunc();
    timoutRef.current = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % imageData.length);
      }, 3000);
    }, 5000);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imageData.length);
    }, 3000);
    return () => {
      clearIntervalFunc();
      if (timoutRef.current) {
        clearTimeout(timoutRef.current);
      }
    };
  }, []);
  const next = () => {
    setCurrentIndex((next) => (next + 1) % imageData.length);
    setIsUserInterating(true);
    restartAutoSlide();
  };
  const previous = () => {
    setCurrentIndex((prev) => (prev == 0 ? imageData.length - 1 : prev - 1));
    setIsUserInterating(true);
    restartAutoSlide();
  };

  return (
    <div className="Carousel-body">
      <button
        className="previous"
        onClick={previous}
        // disabled={currentIndex == 1}
      >
        Previous
      </button>
      {imageData.map((image, index) => {
        return (
          <div key={index}>
            <DisplayImage image={image} currentIndex={currentIndex == index} />
          </div>
        );
      })}
      <button
        className="next"
        onClick={next}
        // disabled={currentIndex > imageData.length - 1}
      >
        Next
      </button>
    </div>
  );
};
export default Carousel;
