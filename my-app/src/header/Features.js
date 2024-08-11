import Feature from "./Feature";
import "./Features.css";
function Features() {
  return (
    <div className={"Features-div"}>
      <Feature
        title={"Creativity"}
        text={"Bringing your vision to life through expert editing."}
      />
      <Feature
        title={"Profit"}
        text={"Turning your engaged followers into qualified leads."}
      />
      <Feature
        title={"Guarantee"}
        text={"Payment is required only if the quality meets expectations."}
      />
    </div>
  );
}

export default Features;
