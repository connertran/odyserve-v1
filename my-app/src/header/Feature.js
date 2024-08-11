import "./Feature.css";
function Feature({ title, text }) {
  return (
    <div className={"Feature-div"}>
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
}

export default Feature;
