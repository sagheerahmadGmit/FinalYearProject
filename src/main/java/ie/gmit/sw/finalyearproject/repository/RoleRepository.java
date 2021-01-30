package ie.gmit.sw.finalyearproject.repository;

import java.util.Optional;

import ie.gmit.sw.finalyearproject.model.ERole;
import ie.gmit.sw.finalyearproject.model.Role;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RoleRepository extends MongoRepository<Role, String> {
  Optional<Role> findByName(ERole name);
}
