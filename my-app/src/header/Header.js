import "./Header.css";
import { motion } from "framer-motion";
function Header() {
  const h1Variants = {
    hidden: { opacity: 0, x: -100 }, // Start with opacity 0 and slightly off to the left
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.6 } }, // Slide in to position and fade in
  };

  // Animation variants for iframe
  const iframeVariants = {
    hidden: { opacity: 0, x: 100 }, // Start with opacity 0 and slightly off to the right
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.6 } }, // Slide in to position and fade in
  };
  return (
    <div className="Header-div">
      <motion.h1
        className="Header-h1"
        initial="hidden"
        animate="visible"
        variants={h1Variants}
      >
        <span className="Header-line1">Transforming Lessons</span>
        <br />
        <span className="Header-line2">Into Visual Masterpieces</span>
      </motion.h1>
      <motion.video
        className="Header-video"
        controls
        src="https://odyserve.eu-central-1.linodeobjects.com/5201210-hd_1920_1080_30fps.mp4"
        type="video/mp4"
        controlsList="nodownload"
        initial="hidden"
        animate="visible"
        variants={iframeVariants}
      ></motion.video>
    </div>
  );
}

export default Header;
