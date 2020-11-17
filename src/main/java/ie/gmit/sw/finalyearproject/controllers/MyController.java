package ie.gmit.sw.finalyearproject.controllers;

import ie.gmit.sw.finalyearproject.model.Test;
import ie.gmit.sw.finalyearproject.repository.Testrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class MyController {

    @Autowired
    private Testrepo tr;

    @GetMapping("/getTest")
    public ResponseEntity<List<Test>> getAllTutorials(@RequestParam(required = false) String name) {
        try {
            List<Test> tests = new ArrayList<>();
            tr.findAll().forEach(tests::add);
            return new ResponseEntity<>(tests, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/addTest")
    public ResponseEntity<Test> createTutorial(@RequestBody Test test) {
        try {
            Test _test = tr.save(new Test(test.getId(), test.getName()));
            return new ResponseEntity<>(_test, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/test-docker")
    public String getData() {

        Test t = new Test();
        t.setId(1);
        t.setName("example");
        tr.save(t);
        return "results: " + tr.findAll();
    }

}
