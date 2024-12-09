import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API_URL } from "./context";

const SingleMovie = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState("");

  const getMovies = async (url) => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if (data.Response === "True") {
        setIsLoading(false);
        setMovie(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let timerOut = setTimeout(() => {
      getMovies(`${API_URL}&i=${id}`);
    }, 800);

    return () => clearTimeout(timerOut);
  }, [id]);

  if (isLoading) {
    return (
      <div className="movie-section">
        <div className="loading">Loading...</div>
      </div>
    );
  }

  const handleGoBack = () => {
    navigate(-1); // Navigates back to the previous page
  };

  return (
    <section className="movie-section">
      <div className="movie-card">
        <figure>
          <img src={movie.Poster} alt="" />
        </figure>
        <div className="card-content">
          <p className="title">{movie.Title}</p>
          <p className="card-text">{movie.Released}</p>
          <p className="card-text">{movie.Genre}</p>
          <p className="card-text">{movie.imdbRating} / 10</p>
          <p className="card-text">{movie.Country}</p>
          <button onClick={handleGoBack} style={styles.backButton}>
            Back
          </button>
        </div>
      </div>
    </section>
  );
};

// Custom inline styles for the movie details page
const styles = {
  section: {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    minHeight: "100vh",
  },
  backButton: {
    marginBottom: "20px",
    padding: "10px 20px",
    backgroundColor: "#626fa4",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
  movieCard: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#fff",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    overflow: "hidden",
    width: "80%",
    maxWidth: "1200px",
  },
  figure: {
    margin: "0",
    padding: "0",
    width: "40%",
  },
  poster: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  movieInfo: {
    padding: "20px",
    width: "60%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  title: {
    fontSize: "32px",
    marginBottom: "20px",
    color: "#333",
  },
  details: {
    fontSize: "18px",
    marginBottom: "10px",
    color: "#555",
  },
};

export default SingleMovie;
