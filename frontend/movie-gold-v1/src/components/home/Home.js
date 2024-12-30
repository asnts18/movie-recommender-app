import React from 'react';
import ErrorBoundary from '../ErrorBoundary'; // Import ErrorBoundary component
import Hero from '../hero/Hero'; // Import Hero component

const Home = ({ movies }) => {
  console.log('Movies in Home component:', movies); // Log movies prop to the console for debugging

  // Check if movies is a valid array, if not, display a message
  if (!Array.isArray(movies)) {
    return <p>No movies found</p>;
  }

  return (
    <div>
      {/* Pass movies prop to Hero component to display movie details */}
      <Hero movies={movies} /> 
    </div>
  );
};

export default Home;
