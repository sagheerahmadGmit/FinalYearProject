package ie.gmit.sw.finalyearproject.repository;

import ie.gmit.sw.finalyearproject.model.Test;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface Testrepo extends MongoRepository<Test, Integer> {

}
