// import React, { useState } from 'react';
import './App.css'; // For styling (optional)
import React, { useState } from 'react';


const Carousel = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fullScreenImage, setFullScreenImage] = useState(null);

  // Function to add a new image to the carousel
  const addImageToCarousel = () => {
    const newImage = `https://picsum.photos/200/300?random=${images.length + 1}`;
    setImages([...images, newImage]);
  };

  // Navigate Left
  const handleLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  // Navigate Right
  const handleRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  // Handle full screen image
  const openFullScreen = (image) => {
    setFullScreenImage(image);
  };

  const closeFullScreen = () => {
    setFullScreenImage(null);
  };

  return (
    <div className="carousel-container">
      <button onClick={addImageToCarousel}>Add Image</button>

      {images.length > 0 && (
        <>
          <button className="nav-button left" onClick={handleLeft}>‹</button>
          <div className="carousel">
            {images.slice(currentIndex, currentIndex + 1).map((img, index) => (
              <img
                key={index}
                src={img}
                alt="carousel"
                onClick={() => openFullScreen(img)}
                className="carousel-image"
              />
            ))}
          </div>
          <button className="nav-button right" onClick={handleRight}>›</button>
        </>
      )}

      {/* Full screen view */}
      {fullScreenImage && (
        <div className="full-screen-overlay">
          <img src={fullScreenImage} alt="Full Screen" className="full-screen-image" />
          <button className="close-button" onClick={closeFullScreen}>×</button>
        </div>
      )}
    </div>
  );
};

export default Carousel;
