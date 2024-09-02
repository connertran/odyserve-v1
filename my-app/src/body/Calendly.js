import { InlineWidget } from "react-calendly";
import { useState, useEffect } from "react";
import "./Calendly.css";
function Calendly() {
  const [calendlyHeight, setCalendlyHeight] = useState("1000px");
  const [calendlyMarginTop, setCalendlyMarginTop] = useState("0px");
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 669) {
        setCalendlyHeight("900px");
        setCalendlyMarginTop("30px");
      } else if (window.innerWidth <= 1023) {
        setCalendlyHeight("1100px");
        setCalendlyMarginTop("-20px");
      } else {
        setCalendlyHeight("800px");
        setCalendlyMarginTop("0px");
      }
    };

    // Initial check the size of the device
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="Calendly-div">
      <h1 className="Calendly-h1">Business Discussion</h1>
      <h3 className="Calendly-h3">Free 15-min Call</h3>
      <div
        className="Calendly-widget-div"
        style={{
          marginTop: calendlyMarginTop,
        }}
      >
        <InlineWidget
          styles={{
            height: calendlyHeight,
          }}
          url="https://calendly.com/conner-tran/15min"
        />
      </div>
    </div>
  );
}

export default Calendly;
