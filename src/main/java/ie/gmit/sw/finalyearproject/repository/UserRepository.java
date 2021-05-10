package ie.gmit.sw.finalyearproject.repository;

import java.util.Optional;

import ie.gmit.sw.finalyearproject.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

//save the user details to the mongo database
public interface UserRepository extends MongoRepository<User, String> {
  //check if the user already exists
  Optional<User> findByUsername(String username);
  //check if the user username already exists
  Boolean existsByUsername(String username);
  //check if the user email already exists
  Boolean existsByEmail(String email);
}
