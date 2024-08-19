import { useState, useEffect } from "react";
import Short from "./Short";
import "./Projects.css";

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [vidStyleNum, setVidStyleNum] = useState(1);

  const videos = [
    "https://odyserve.eu-central-1.linodeobjects.com/rich-kid-compare.mp4",
    "https://odyserve.eu-central-1.linodeobjects.com/mrbeast-compare.mp4",
    "https://odyserve.eu-central-1.linodeobjects.com/david-pat-compare.mp4",
  ];

  useEffect(() => {
    console.log(currentIndex); // This will log the updated value
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === videos.length - 1 ? 0 : prevIndex + 1;
      setVidStyleNum(newIndex + 1); // Update vidStyleNum to match the currentIndex
      return newIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? videos.length - 1 : prevIndex - 1;
      setVidStyleNum(newIndex + 1); // Update vidStyleNum to match the currentIndex
      return newIndex;
    });
  };

  return (
    <div className="Projects-div">
      <h1 className="Projects-h1">Projects</h1>
      <div className="carousel-wrapper">
        <div
          className="carousel"
          style={{
            transform: `translateX(calc(-${currentIndex * 180}px + 32%))`,
          }}
        >
          {videos.map((url, index) => (
            <div className="carousel-item" key={index}>
              <Short url={url} vidNum={index + 1} vidStyleNum={vidStyleNum} />
            </div>
          ))}
        </div>
      </div>
      <div className="carousel-controls">
        {currentIndex !== 0 && (
          <button className="Projects-prev-btn" onClick={prevSlide}>
            ❮
          </button>
        )}
        {currentIndex !== videos.length - 1 && (
          <button className="Projects-next-btn" onClick={nextSlide}>
            ❯
          </button>
        )}
      </div>
    </div>
  );
}

export default Projects;
