package ie.gmit.sw.finalyearproject;

import ie.gmit.sw.finalyearproject.model.User;
import ie.gmit.sw.finalyearproject.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class FinalyearprojectApplication {

	private UserRepository userRepository;

	public static void main(String[] args) {
		SpringApplication.run(FinalyearprojectApplication.class, args);
	}
}
