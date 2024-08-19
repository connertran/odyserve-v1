import "./Short.css";
function Short({ url, vidNum, vidStyleNum }) {
  const videoClassName =
    vidNum === vidStyleNum ? "Short-video active" : "Short-video";
  return (
    <>
      <video
        className={videoClassName}
        id={`Short-vid${vidNum}`}
        controls
        width="250"
        src={url}
        type="video/mp4"
        autoPlay
        muted
        loop
        controlsList="nodownload"
      ></video>
    </>
  );
}

export default Short;
