import React from 'react';
import './Hero.css';
import Carousel from 'react-material-ui-carousel'; // Import carousel for movie display
import { Paper } from '@mui/material'; // Import Paper component from Material UI for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon for play button icon
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons"; // Import play circle icon
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate for routing
import Button from 'react-bootstrap/Button'; // Import Button from React Bootstrap

export const Hero = ({ movies }) => {

  const navigate = useNavigate(); // Initialize navigate function from useNavigate hook

  // Function to navigate to the reviews page of a specific movie
  function reviews(movieId) {
    navigate(`/Reviews/${movieId}`);
  }

  return (
    <div>
      {/* Carousel to display movies */}
      <Carousel>
        {movies.map((movie) => (
          <Paper key={movie.imdbId}>
            <div className="movie-card-container">
              {/* Each movie's card with background image */}
              <div className="movie-card" style={{"--img": `url(${movie.backdrops[0]})`}}>
                <div className="movie-detail">
                  {/* Movie poster */}
                  <div className="movie-poster">
                    <img src={movie.poster} alt={movie.title} />
                  </div>

                  {/* Movie title */}
                  <div className="movie-title">
                    <h4>{movie.title}</h4>
                  </div>

                  {/* Buttons to navigate to trailer and reviews */}
                  <div className='movie-buttons-container'>
                    {/* Link to trailer page */}
                    <Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
                      <div className='play-button-icon-container'>
                        <FontAwesomeIcon className='play-button-icon' icon={faCirclePlay} />
                      </div>
                    </Link>

                    {/* Button to navigate to reviews page */}
                    <div className="movie-review-button-container">
                      <Button variant="info" onClick={() => reviews(movie.imdbId)}> Reviews </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Paper>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
