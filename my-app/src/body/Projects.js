import { useState, useRef, useEffect } from "react";
import Short from "./Short";
import { motion, useAnimation, useInView } from "framer-motion";
import "./Projects.css";

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [vidStyleNum, setVidStyleNum] = useState(2);
  const [delayPassed, setDelayPassed] = useState(false);

  const controls = useAnimation();
  const ref = useRef(null);

  // Delay logic
  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayPassed(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const isInView = useInView(ref, { triggerOnce: true, amount: 0.1 });

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

  // Animation logic
  useEffect(() => {
    if (delayPassed && isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    } else if (delayPassed) {
      controls.start({ opacity: 0, y: 50, scale: 0.8 });
    }
  }, [isInView, controls, delayPassed]);

  return (
    <motion.div
      ref={ref}
      className="Projects-div"
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={controls}
    >
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
    </motion.div>
  );
}

export default Projects;
