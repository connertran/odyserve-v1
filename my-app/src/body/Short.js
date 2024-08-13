function Short() {
  return (
    <>
      {/* <iframe
        width="315"
        height="560"
        src="https://www.youtube.com/embed/PbdRNHjl8WU"
        title="Short1"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media, gyroscope; picture-in-picture; web-share"
      ></iframe> */}
      <video controls width="250" autoPlay>
        <source
          src="https://odyserve.eu-central-1.linodeobjects.com/rich-kid-compare.mp4"
          type="video/mp4"
        />
        <a href="/media/cc0-videos/flower.mp4">MP4</a>
      </video>
    </>
  );
}

export default Short;
