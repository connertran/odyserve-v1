import { InlineWidget } from "react-calendly";
import "./Calendly.css";
function Calendly() {
  return (
    <div className="Calendly-div">
      <h1 className="Calendly-h1">Business Discussion</h1>
      <h3 className="Calendly-h3">Free 15-min Call</h3>
      <div className="Calendly-widget-div">
        <InlineWidget
          styles={{
            height: "1000px",
          }}
          url="https://calendly.com/conner-tran/15min"
        />
      </div>
    </div>
  );
}

export default Calendly;
