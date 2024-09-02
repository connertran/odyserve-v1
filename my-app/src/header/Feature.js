import "./Feature.css";

function Feature({ title, text, className = "" }) {
  return (
    <div className={`Feature-div ${className}`}>
      <h1 className="Feature-h1">{title}</h1>
      {/* This allows the <br /> tag to be rendered as an actual line break */}
      <p className="Feature-p" dangerouslySetInnerHTML={{ __html: text }}></p>
    </div>
  );
}

export default Feature;

// #####################################

// import { motion } from "framer-motion";
// import "./Feature.css";
// function Feature({ title, text, className = "", variants }) {
//   return (
//     <motion.div
//       className={`Feature-div ${className}`}
//       initial="hidden"
//       animate="visible"
//       variants={variants}
//     >
//       <h1 className="Feature-h1">{title}</h1>
//       {/* This allows the <br /> tag to be rendered as an actual line break */}
//       <p className="Feature-p" dangerouslySetInnerHTML={{ __html: text }}></p>
//     </motion.div>
//   );
// }

// export default Feature;

// #####################################

// import "./Feature.css";
// function Feature({ title, text, className = "" }) {
//   return (
//     <div className={`Feature-div ${className}`}>
//       <h1 className="Feature-h1">{title}</h1>
//       {/* This allows the <br /> tag to be rendered as an actual line break */}
//       <p className="Feature-p" dangerouslySetInnerHTML={{ __html: text }}></p>
//     </div>
//   );
// }

// export default Feature;
