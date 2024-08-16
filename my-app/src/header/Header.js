import "./Header.css";
function Header() {
  return (
    <div className="Header-div">
      <h1 className="Header-h1">
        Transforming Lessons Into Visual Masterpieces
      </h1>
      <iframe
        className="Header-video"
        src="https://www.youtube.com/embed/qyomWr_C_jA?si=XROTy7o5UGxmxXzG"
        title="Web Design"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Header;
