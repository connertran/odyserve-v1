import "./Feature.css";
function Feature({ title, text }) {
  return (
    <div className={"Feature-div"}>
      <h1 className="Feature-h1">{title}</h1>
      <p className="Feature-p">{text}</p>
    </div>
  );
}

export default Feature;
