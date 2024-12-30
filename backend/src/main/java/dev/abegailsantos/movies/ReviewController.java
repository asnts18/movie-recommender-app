package dev.abegailsantos.movies;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1/reviews")
public class ReviewController {

    @Autowired
    private ReviewService reviewService;

    // Method to create a review
    @PostMapping
    public ResponseEntity<Review> createReview(@RequestBody Map<String, String> payload) {
        Review newReview = reviewService.createReview(payload.get("reviewBody"), payload.get("imdbId"));
        return new ResponseEntity<>(newReview, HttpStatus.CREATED);
    }

    // Method to get reviews for a specific movie by IMDb ID
    @GetMapping("/{imdbId}")
    public ResponseEntity<List<Review>> getReviewsByMovieId(@PathVariable("imdbId") String imdbId) {
        List<Review> reviews = reviewService.getReviewsByMovieId(imdbId);
        if (reviews != null && !reviews.isEmpty()) {
            return new ResponseEntity<>(reviews, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }
}
