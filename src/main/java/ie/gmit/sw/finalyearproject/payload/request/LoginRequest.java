package ie.gmit.sw.finalyearproject.payload.request;

import javax.validation.constraints.NotBlank;

public class LoginRequest {
	// the user makes a login request
	// the users username and password will be stored in this class
	// and used for authenticating the user
	@NotBlank
	private String username;

	@NotBlank
	private String password;

	//getters and setters for user details
	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}
