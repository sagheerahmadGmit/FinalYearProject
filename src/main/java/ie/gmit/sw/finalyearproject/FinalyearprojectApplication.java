package ie.gmit.sw.finalyearproject;

import ie.gmit.sw.finalyearproject.model.User;
import ie.gmit.sw.finalyearproject.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class FinalyearprojectApplication implements CommandLineRunner {

	private UserRepository userRepository;

	public static void main(String[] args) {
		SpringApplication.run(FinalyearprojectApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		User u1 = new User("John", "Doe", "johndoe@gmail.com", "doe123");

		userRepository.save(u1);
	}
}
