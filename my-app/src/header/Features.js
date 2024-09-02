import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Feature from "./Feature";
import "./Features.css";

function Features() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 760);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 760);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const mobileVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, delay: 0.4 },
    },
  };

  const desktopVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.4 },
    },
  };

  // const variants = isMobile ? mobileVariants : desktopVariants;
  const variants = desktopVariants;

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

// #####################################

// import Feature from "./Feature";
// import "./Features.css";
// function Features() {
//   const commonVariants = {
//     hidden: { opacity: 0, x: -100 }, // Start with opacity 0 and slightly off to the left
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 0.8 },
//     }, // Slide in to position and fade in with easing
//   };

//   const f1Variants = {
//     ...commonVariants,
//     visible: {
//       ...commonVariants.visible,
//       transition: { ...commonVariants.visible.transition, delay: 0.4 }, // Reduced delay for smoother transition
//     },
//   };

//   const f2Variants = {
//     ...commonVariants,
//     visible: {
//       ...commonVariants.visible,
//       transition: { ...commonVariants.visible.transition, delay: 0.6 }, // Slightly reduced delay
//     },
//   };

//   const f3Variants = {
//     ...commonVariants,
//     visible: {
//       ...commonVariants.visible,
//       transition: { ...commonVariants.visible.transition, delay: 0.8 }, // Slightly reduced delay
//     },
//   };
//   return (
//     <div className={"Features-div"}>
//       <Feature
//         title={"Creativity"}
//         text={"Bringing your vision to life<br />through expert editing."}
//         variants={f1Variants}
//       />
//       <Feature
//         title={"Profit"}
//         text={"Turning your engaged followers<br />into qualified leads."}
//         className={"Features-middle"}
//         variants={f2Variants}
//       />
//       <Feature
//         title={"Guarantee"}
//         text={
//           "Payment is required only if the<br />quality meets expectations."
//         }
//         variants={f3Variants}
//       />
//     </div>
//   );
// }

// export default Features;

// #####################################

// import Feature from "./Feature";
// import "./Features.css";
// function Features() {
//   return (
//     <div className={"Features-div"}>
//       <Feature
//         title={"Creativity"}
//         text={"Bringing your vision to life<br />through expert editing."}
//       />
//       <Feature
//         title={"Profit"}
//         text={"Turning your engaged followers<br />into qualified leads."}
//         className={"Features-middle"}
//       />
//       <Feature
//         title={"Guarantee"}
//         text={
//           "Payment is required only if the<br />quality meets expectations."
//         }
//       />
//     </div>
//   );
// }

// export default Features;
