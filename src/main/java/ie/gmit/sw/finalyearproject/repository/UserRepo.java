package ie.gmit.sw.finalyearproject.repository;

import ie.gmit.sw.finalyearproject.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepo extends MongoRepository<User, String> {
}
