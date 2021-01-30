package ie.gmit.sw.finalyearproject.repository;

import java.util.Optional;

import ie.gmit.sw.finalyearproject.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface UserRepository extends MongoRepository<User, String> {
  Optional<User> findByUsername(String username);

  Boolean existsByUsername(String username);

  Boolean existsByEmail(String email);
}
