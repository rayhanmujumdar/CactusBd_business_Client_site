import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import { PlayIcon } from "@heroicons/react/24/solid";

function Home() {
  const videoRef = useRef();
  const [play, getPlay] = useState(true);
  const [end, getEnd] = useState(false);
  // useEffect(() => {
  //   videoRef.current.pause();
  //   if (play) {
  //     videoRef.current.play();
  //   }
  // }, [play]);
  // useEffect(() => {
  //   if (end) {
  //     getPlay(false);
  //   }
  // }, [end]);
  return (
    <div>
      <div
        className={`video-container relative ${
          !play &&
          `before:w-full before:h-full before:bg-[rgba(0,0,0,0.6)] before:absolute before:top-0 before:left-0 before:right-0`
        }`}
      >
        {/* youtube server use to home page video display */}
        {/* <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/e7eMKW6DZHc?controls=0&mute=true&loop=10&autoplay=true"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;loop"
          allowfullscreen
        ></iframe> */}
        {/* custom make home page video display code */}
        <video
          ref={videoRef}
          onEnded={() => getEnd(true)}
          id="videoRef"
          autoPlay
          src="../../../utils/test_video.mp4"
          playsInline
          muted
        ></video>
      </div>
      <div
        data-aos="fade-up"
        className={`flex justify-center items-center h-[80vh] ${
          play && "hidden"
        }`}
      >
        {!play && (
          <div
            onClick={() => {
              getPlay(true);
              getEnd(false);
            }}
            className=" text-white cursor-pointer flex justify-center items-center flex-col "
          >
            <h1 className="intro_text md:text-6xl text-2xl font-bold font-mono">
              Welcome To Cactus BD
            </h1>
            <PlayIcon
              data-aos="fade-up"
              className="md:h-32 md:w-32 h-10 w-10 text-[#449D48] animate-ping mt-10"
            ></PlayIcon>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
