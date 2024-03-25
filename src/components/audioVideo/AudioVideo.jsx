import React, { useRef, useEffect } from "react";
import "./audioVideo.scss";
import { HeadingTitle } from "../headingTitle/HeadingTitle";
const AudioVideo = () => {
  // const videoRef = useRef(null);
  // useEffect(() => {
  //   if (videoRef.current) {
  //     videoRef.current.play();
  //   }
  // }, []);
  return (
    <div className="audioVideo">
      <div className="audioVideoWrapper">
        <HeadingTitle title="Audio & Video" />
        <div className="body">
          <div className="videoWrapper">
            <video width="100%" controls autoplay loop>
              <source src="/assets/newUpdate.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="listWrapper">
            <div className="list">
              <div className="item">
                <div className="left">
                  <img src="assets/audio-video-01.jpg" alt="" />
                </div>
                <div className="right">
                  <ul className="nav">
                    <li>Cynthia C</li>
                    <li>16 April 2024</li>
                  </ul>
                  <h3>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Libero!
                  </h3>
                </div>
              </div>

              <div className="item">
                <div className="left">
                  <img src="assets/audio-video-02.jpg" alt="" />
                </div>
                <div className="right">
                  <ul className="nav">
                    <li>Cynthia C</li>
                    <li>16 April 2024</li>
                  </ul>
                  <h3>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Libero!
                  </h3>
                </div>
              </div>

              <div className="item">
                <div className="left">
                  <img src="assets/audio-video-03.jpg" alt="" />
                </div>
                <div className="right">
                  <ul className="nav">
                    <li>Cynthia C</li>
                    <li>16 April 2024</li>
                  </ul>
                  <h3>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Libero!
                  </h3>
                </div>
              </div>

              <div className="item">
                <div className="left">
                  <img src="assets/audio-video-04.jpg" alt="" />
                </div>
                <div className="right">
                  <ul className="nav">
                    <li>Cynthia C</li>
                    <li>16 April 2024</li>
                  </ul>
                  <h3>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Libero!
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioVideo;
