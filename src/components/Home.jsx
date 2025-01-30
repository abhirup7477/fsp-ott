import React from "react";
import "../styles/home.css"; // Import styles
import MovieCard from "./MovieCard"; // Create a MovieCard component for each movie/show

const HomePage = () => {
  // Sample movie data
  const trendingMovies = [
    { id: 1, title: "SMILE", image: "movie1.jpg" },
    { id: 2, title: "REMEMORY", image: "movie2.jpg" },
  ];

  const popularMovies = [
    { id: 3, title: "MOONLIGHT", image: "movie3.jpg" },
    { id: 4, title: "FAST X", image: "movie4.jpg" },
  ];

  return (
    <div className="homepage">
      <div className="home_navbar">
        <h2>OTT PLATFORM</h2>
        <input type="text" placeholder="Search..." />
      </div>

      <div className="banner">
        <h1>Featured Show</h1>
        <p>Watch the latest and greatest now!</p>
      </div>

      <section className="movies-section">
        <h2>Trending Now</h2>
        <div className="movies-container">
          {trendingMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>

      <section className="movies-section">
        <h2>Popular Movies</h2>
        <div className="movies-container">
          {popularMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;

