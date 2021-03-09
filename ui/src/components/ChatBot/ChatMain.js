import {ChatEngine} from "react-chat-engine";
import ChatFeed from './comp/ChatFeed';
import './Styles.css';
import React from "react";
import ChatLogin from "./comp/ChatLogin";

const Chat = () => {

    if(!localStorage.getItem('username')) return <ChatLogin />

    return(
        <ChatEngine
            height='100vh'
            projectID='fc2e71eb-a64b-4391-8dd3-ad17bcc782f7'
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
}

export default Chat;
