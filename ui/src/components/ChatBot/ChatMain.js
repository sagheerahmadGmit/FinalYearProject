// imports
import {ChatEngine} from "react-chat-engine";
import ChatFeed from './comp/ChatFeed';
import './Styles.css';
import React from "react";
import ChatLogin from "./comp/ChatLogin";

const Chat = () => {

    // check if the user is signed in
    // if not bring the user to the chat login page where he can login
    if(!localStorage.getItem('username')) return <ChatLogin />

    return(
        <ChatEngine
            height='100vh'
            projectID='fc2e71eb-a64b-4391-8dd3-ad17bcc782f7'
            // get the username and password from the local storage
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            // This gets rid off the chat feed implemented by ChatEngine and
            // allows us to use our own ChatFeed
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
}

// export Chat
export default Chat;
