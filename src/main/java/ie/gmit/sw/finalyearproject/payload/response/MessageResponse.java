package ie.gmit.sw.finalyearproject.payload.response;

public class MessageResponse {
	//send back a message to the user to let them know whats happening in the background
	// for example the email and username is already taken or
	// the password is weak and short
	private String message;

	// getters and setter for the message response
	public MessageResponse(String message) {
	    this.message = message;
	  }

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
}
