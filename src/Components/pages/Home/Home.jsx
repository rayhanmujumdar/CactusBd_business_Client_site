import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import { PlayIcon } from "@heroicons/react/24/solid";

function Home() {
  const videoRef = useRef();
  const [play, getPlay] = useState(false);
  useEffect(() => {
    videoRef.current.pause();
    if (play) {
      videoRef.current.play();
    }
  }, [play]);
  return (
    <div>
      <div
        className={`video-container relative ${
          !play &&
          `before:w-full before:h-full before:bg-[rgba(0,0,0,0.6)] before:absolute before:top-0 before:left-0 before:right-0`
        }`}
      >
        <video
          ref={videoRef}
          id="videoRef"
          autoPlay
          src="../../../utils/test_video.mp4"
          playsInline
          loop
          muted
        ></video>
      </div>
      <div
        className={`flex justify-center items-center h-[80vh] ${
          play && "hidden"
        }`}
      >
        <div
          onClick={() => getPlay(!play)}
          className=" text-white cursor-pointer flex justify-center items-center flex-col "
        >
          <h1  data-aos="fade-up" className="intro_text text-6xl font-bold font-mono">Introduction Of CACTUS BD</h1>
          <PlayIcon  data-aos="fade-up" className="h-32 w-32 text-[#449D48] animate-ping mt-10"></PlayIcon>
        </div>
      </div>
    </div>
  );
}

export default Home;
