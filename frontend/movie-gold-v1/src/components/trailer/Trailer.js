import { useParams } from "react-router-dom"; // For extracting URL parameters
import ReactPlayer from 'react-player'; // For rendering YouTube video
import './Trailer.css'; // Custom styling for the trailer

import React from 'react';

const Trailer = () => {
  // Extract YouTube trailer ID from URL params
  let params = useParams();
  const key = params.ytTrailerId;

  return (
    <div className="react-player-container">
      {/* Render ReactPlayer if trailer ID exists */}
      {key ? (
        <ReactPlayer 
          controls="true" 
          playing={true} 
          url={`https://www.youtube.com/watch?v=${key}`} 
          width='100%' 
        />
      ) : null}
    </div>
  );
}

export default Trailer;
