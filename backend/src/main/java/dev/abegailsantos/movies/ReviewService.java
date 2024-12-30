package dev.abegailsantos.movies;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private MongoTemplate mongoTemplate; // For performing custom MongoDB operations

    // Method to create a review
    public Review createReview(String reviewBody, String imdbId) {
        // Create a new review and save it to the repository
        Review review = reviewRepository.insert(new Review(reviewBody));

        // Update the associated movie document to add the new review to the 'reviewIds' array
        mongoTemplate.update(Movie.class)
                .matching(Criteria.where("imdbId").is(imdbId))
                .apply(new Update().push("reviewIds").value(review))
                .first();

        return review;
    }

    // Method to get reviews by IMDb ID
    public List<Review> getReviewsByMovieId(String imdbId) {
        // Find the movie document by IMDb ID and fetch the associated reviews
        Movie movie = mongoTemplate.findOne(
                new org.springframework.data.mongodb.core.query.Query(Criteria.where("imdbId").is(imdbId)),
                Movie.class
        );

        // Return the list of reviews for the movie, if available
        if (movie != null && movie.getReviewIds() != null) {
            return movie.getReviewIds();  // Assuming 'reviewIds' is a List of Review objects
        }

        // Return an empty list if no reviews are found
        return List.of();
    }
}
