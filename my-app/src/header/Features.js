import Feature from "./Feature";
import "./Features.css";
function Features() {
  return (
    <div className={"Features-div"}>
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
    </div>
  );
}

export default Features;
