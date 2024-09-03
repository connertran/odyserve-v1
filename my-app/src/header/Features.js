import { motion } from "framer-motion";
import Feature from "./Feature";
import "./Features.css";

function Features() {
  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.6 },
    },
  };

  return (
    <motion.div
      className={"Features-div"}
      initial="hidden"
      animate="visible"
      variants={variants}
    >
      <Feature
        title={"Creativity"}
        text={"Bringing your vision to life<br />through expert editing."}
      />
      <Feature
        title={"Profit"}
        text={"Turning your engaged followers<br />into qualified leads."}
        className={"Features-middle"}
      />
      <Feature
        title={"Guarantee"}
        text={
          "Payment is required only if the<br />quality meets expectations."
        }
      />
    </motion.div>
  );
}

export default Features;
