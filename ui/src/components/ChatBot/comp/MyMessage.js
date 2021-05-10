// import
import React from "react";

// function MyMessage taking in a message
const MyMessage = ({ message }) => {
    // check if a message has been sent by the user
    if (message?.attachments?.length > 0){
        return (
            // place an image of the users profile picture
            <img
                src={message.attachments[0].file}
                alt='message-attachment'
                className='message-image'
                style={{float:'right'}}
            />
        )
    }
    return(
        // show the message
        <div className="message" style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#3B2A50' }}>
            {message.text}
        </div>
    );
}

// export MyMessage
export default MyMessage;