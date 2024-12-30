import { useEffect, useRef, useState } from "react";
import api from "../../api/axiosConfig";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ReviewForm from "../reviewForm/ReviewForm";
import React from "react";
import "./Reviews.css"; // Import the CSS file

const Reviews = ({ getMovieData, movie }) => {
  const revText = useRef();
  const [reviews, setReviews] = useState([]); // Local state for reviews
  let params = useParams();
  const movieId = params.movieId;

  // Fetch movie data when the component mounts
  useEffect(() => {
    getMovieData(movieId);
    fetchReviews(); // Fetch initial reviews
  }, [movieId, getMovieData]);

  const fetchReviews = async () => {
    try {
      const reviewsResponse = await api.get(`/api/v1/reviews/${movieId}`);
      const sortedReviews = reviewsResponse.data.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt); // Sort by date descending
      });
      setReviews(sortedReviews);
    } catch (err) {
      console.error("Error fetching reviews:", err);
    }
  };

  // Function to handle submitting a new review
  const addReview = async (e) => {
    e.preventDefault();

    const rev = revText.current;

    try {
      // Post review to API
      await api.post("/api/v1/reviews", {
        reviewBody: rev.value,
        imdbId: movieId,
      });

      // Fetch the updated list of reviews and set them
      fetchReviews();

      // Clear the review text input
      rev.value = "";
    } catch (err) {
      console.error("Error submitting review:", err);
    }
  };

  // JSX rendering part
  return (
    <Container>
      <Row>
        <Col>
          <h3>Reviews</h3> {/* Display the title of the reviews section */}
        </Col>
      </Row>
      <Row className="mt-2">
        <Col md={4}>
          <img src={movie?.poster} alt="movie poster" className="img-fluid" />
        </Col>
        <Col md={8}>

          {/* Review Form */}
          <Row>
            <Col>
              <ReviewForm
                handleSubmit={addReview}
                revText={revText}
                labelText="Write a review?"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <hr />
            </Col>
          </Row>
          {/* Reviews Container (Scrollable) */}
          <Row>
            <Col>
              <div className="reviews-container">
                {/* Check if there are any reviews */}
                {reviews?.length > 0 ? (
                  reviews.map((review, index) => (
                    <div key={index} className="review-card mb-3">
                      <Row>
                        <Col>
                        {/* Display review text and creation date */}
                          <p className="review-text">{review.body}</p>
                          <small className="review-date">
                            {new Date(review.createdAt).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "2-digit",
                              day: "2-digit",
                            })}
                          </small>
                        </Col>
                      </Row>
                    </div>
                  ))
                ) : (
                    // If there are no reviews, show this message
                  <p className="no-reviews-message">No reviews yet. Be the first to review!</p>
                )}
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Reviews;
