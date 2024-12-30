package dev.abegailsantos.movies;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.config.EnableMongoAuditing;
import org.springframework.web.bind.annotation.RestController;

@EnableMongoAuditing  // This enables auditing, including @CreatedDate and @LastModifiedDate
@SpringBootApplication
@RestController // used to create RESTful web services using Spring MVC

public class MoviesApplication {

	public static void main(String[] args) {
		SpringApplication.run(MoviesApplication.class, args);
	}

}
