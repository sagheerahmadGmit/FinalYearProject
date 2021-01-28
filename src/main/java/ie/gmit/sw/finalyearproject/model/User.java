package ie.gmit.sw.finalyearproject.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "user")
public class User{
    private String fName;
    private String sName;
    @Id
    private String email;
    private String password;

    public User(String fName, String sName, String email, String password) {
        this.fName = fName;
        this.sName = sName;
        this.email = email;
        this.password = password;
    }

    public User() {

    }

    public String getfName() {
        return fName;
    }

    public void setfName(String fName) {
        this.fName = fName;
    }

    public String getsName() {
        return sName;
    }

    public void setsName(String sName) {
        this.sName = sName;
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
}