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
