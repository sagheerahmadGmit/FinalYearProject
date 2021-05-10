package ie.gmit.sw.finalyearproject.payload.request;

import java.util.Set;

import javax.validation.constraints.*;
 
public class SignupRequest {
    // the user makes a registeration request
    // the users username and password and email will be stored in this class
    // and used for saving the user details into the database

    //the suername must be minimun 3 characters
    @NotBlank
    @Size(min = 3, max = 20)
    private String username;

    @NotBlank
    @Size(max = 50)
    @Email
    private String email;
    
    private Set<String> roles;

    //the password must be minimum 6 characters
    @NotBlank
    @Size(min = 6, max = 40)
    private String password;

    //getters and setters for the user registration
    public String getUsername() {
        return username;
    }
 
    public void setUsername(String username) {
        this.username = username;
    }
 
    public String getEmail() {
        return email;
    }
 
    public void setEmail(String email) {
        this.email = email;
    }
 
    public String getPassword() {
        return password;
    }
 
    public void setPassword(String password) {
        this.password = password;
    }
    
    public Set<String> getRoles() {
      return this.roles;
    }
    
    public void setRole(Set<String> roles) {
      this.roles = roles;
    }
}
