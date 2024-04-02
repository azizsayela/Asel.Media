import React, { useState, useEffect } from "react";
import "./audioVideo.scss";
import { HeadingTitle } from "../headingTitle/HeadingTitle";
import client from "../../sanityClient";

const fetchVideos = async () => {
  try {
    const videos = await client.fetch(`*[_type == 'video']`);
    return videos;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getVideoUrl = (assetRef) => {
  return `https://cdn.sanity.io/files/1tsp9brm/production/${
    assetRef.split("-")[1]
  }.mp4`;
};

const AudioVideo = () => {
  const [videos, setVideos] = useState([]);
  const [currentVideoURL, setCurrentVideoURL] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    fetchVideos()
      .then((videos) => {
        setVideos(videos);
        if (videos.length > 0) {
          const initialVideoUrl = getVideoUrl(
            videos[0]?.videoFile?.asset?._ref
          );
          setCurrentVideoURL(initialVideoUrl);
        }
      })
      .catch((error) => setError("Failed to fetch videos"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;

  const handleVideoSelect = (video) => {
    const videoUrl = getVideoUrl(video?.videoFile?.asset?._ref);
    setCurrentVideoURL(videoUrl);
  };

  return (
    <div className="audioVideo">
      <div className="audioVideoWrapper">
        <HeadingTitle title="ASEL mobile en Vidéo" />
        <div className="body">
          <div className="videoWrapper">
            <video
              key={currentVideoURL}
              width="100%"
              autoPlay
              loop
              controls
              muted
            >
              <source src={currentVideoURL} type="video/mp4" />
            </video>
          </div>

          <div className="listWrapper">
            <div className="list">
              {videos.length > 0 &&
                videos.map((video, index) => (
                  <div
                    className="item"
                    key={index}
                    onClick={() => handleVideoSelect(video)}
                  >
                    <div className="left">
                      <video
                        key={getVideoUrl(video?.videoFile?.asset?._ref)}
                        width="100%"
                      >
                        <source
                          src={getVideoUrl(video?.videoFile?.asset?._ref)}
                          type="video/mp4"
                        />
                      </video>
                    </div>
                    <div className="right">
                      <ul className="nav">
                        <li>{video?.publicationDate}</li>
                      </ul>
                      <h3>{video?.title}</h3>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioVideo;
