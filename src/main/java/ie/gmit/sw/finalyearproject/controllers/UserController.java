package ie.gmit.sw.finalyearproject.controllers;

import ie.gmit.sw.finalyearproject.model.User;
import ie.gmit.sw.finalyearproject.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class UserController {

//    @Autowired
//    private UserRepo userRepo;
//
//    @CrossOrigin(origins = "*")
//    @GetMapping("/getUser")
//    public ResponseEntity<List<User>> getAllTutorials(@RequestParam(required = false) String fName) {
//        try {
//            List<User> users = new ArrayList<>();
//            userRepo.findAll().forEach(users::add);
//            return new ResponseEntity<>(users, HttpStatus.OK);
//        } catch (Exception e) {
//            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//    }
//
//    @PostMapping("/addUser")
//    public ResponseEntity<User> createTutorial(@RequestBody User user) {
//        try {
//            User _user = userRepo.save(new User(user.getfName(), user.getsName(), user.getEmail(), user.getPassword()));
//            return new ResponseEntity<>(_user, HttpStatus.CREATED);
//        } catch (Exception e) {
//            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//    }

}
