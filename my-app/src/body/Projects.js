import { useState } from "react";
import Short from "./Short";
import "./Projects.css";

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const videos = [
    "https://odyserve.eu-central-1.linodeobjects.com/rich-kid-compare.mp4",
    "https://odyserve.eu-central-1.linodeobjects.com/mrbeast-compare.mp4",
    "https://odyserve.eu-central-1.linodeobjects.com/david-pat-compare.mp4",
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="Projects-div">
      <h1 className="Projects-h1">Projects</h1>
      <div
        className="carousel"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {videos.map((url, index) => (
          <div className="carousel-item" key={index}>
            <Short url={url} />
          </div>
        ))}
      </div>
      <div className="carousel-controls">
        {currentIndex !== 0 && (
          <button className="Projects-prev-btn" onClick={prevSlide}>
            ❮
          </button>
        )}
        {currentIndex !== 2 && (
          <button className="Projects-next-btn" onClick={nextSlide}>
            ❯
          </button>
        )}
      </div>
    </div>
  );
}

export default Projects;
