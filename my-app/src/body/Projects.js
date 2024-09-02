import { useState } from "react";
import Short from "./Short";
import "./Projects.css";

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [vidStyleNum, setVidStyleNum] = useState(2);

  const videos = [
    "https://odyserve.eu-central-1.linodeobjects.com/rich-kid-compare.mp4",
    "https://odyserve.eu-central-1.linodeobjects.com/mrbeast-compare.mp4",
    "https://odyserve.eu-central-1.linodeobjects.com/david-pat-compare.mp4",
  ];

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
      <div className="carousel-wrapper">
        <div
          className="carousel"
          style={{
            transform: `translateX(calc(-${currentIndex * 180}px + 33%))`,
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
        <button
          className="Projects-prev-btn"
          onClick={prevSlide}
          disabled={currentIndex === 0}
        >
          ❮
        </button>

        <button
          className="Projects-next-btn"
          onClick={nextSlide}
          disabled={currentIndex === videos.length - 1}
        >
          ❯
        </button>
      </div>
    </div>
  );
}

export default Projects;
