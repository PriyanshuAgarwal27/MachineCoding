import "./Carousel.css";
const DisplayImage = ({ image, currentIndex }) => {
  return (
    <div>
      {currentIndex && (
        <img className="Carousel-container" src={image.src} alt={image.alt} />
      )}
    </div>
  );
};
export default DisplayImage;
