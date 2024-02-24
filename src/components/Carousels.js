import React, { useState } from "react";

const images = [
  "asset/image1.jpg",
  "asset/image2.jpg",
  "asset/image3.jpg",
  // ...
];

const Carousels = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevClick = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="carousel">
      <button className="btn" onClick={handlePrevClick}>
        Prev
      </button>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="carousel-img"
      />
      <button className="btn" onClick={handleNextClick}>
        Next
      </button>
    </div>
  );
};

export default Carousels;
