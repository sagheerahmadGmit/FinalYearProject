package ie.gmit.sw.finalyearproject.repository;

import java.util.Optional;

import ie.gmit.sw.finalyearproject.model.ERole;
import ie.gmit.sw.finalyearproject.model.Role;
import org.springframework.data.mongodb.repository.MongoRepository;

// this class stores all the users in the mongo database
public interface RoleRepository extends MongoRepository<Role, String> {
  //get the user by name
  Optional<Role> findByName(ERole name);
}
