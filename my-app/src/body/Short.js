import "./Short.css";
function Short({ url }) {
  return (
    <>
      <video
        controls
        width="250"
        src={url}
        type="video/mp4"
        autoPlay
        muted
        loop
      ></video>
    </>
  );
}

export default Short;
