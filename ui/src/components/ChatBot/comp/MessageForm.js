// imports
import React from "react";
import { useState } from 'react';
import { sendMessage, isTyping} from "react-chat-engine";
import {PictureAsPdfOutlined, SendOutlined} from "@material-ui/icons";

// function MessageForm taking in props
const MessageForm = (props) => {
    // constants
    const [value, setValue] = useState('');
    const { chatId, creds } = props;

    // handle the submission
    const handleSubmit = (event) => {
        // error handling
        event.preventDefault();
        const text = value.trim();
        if (text.length > 0) sendMessage(creds, chatId, { text })
        setValue('');
    }

    const handleChange = (event) => {
        // show that the user is typing
        setValue(event.target.value);
        isTyping(props, chatId);
    }

    const handleUpload = (event) => {
        // send the message
        sendMessage(creds, chatId, { files: event.target.files, text: '' })
    }


    return(
        <form className="message-form" onSubmit={handleSubmit}>
            <input
                className="message-input"
                placeholder="Send Message..."
                value={value}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
            <label htmlFor="upload-button">
                <span className="image-button">
                    <PictureAsPdfOutlined className="picture-icon"/>
                </span>
            </label>
            <input
                type="file"
                multiple={false}
                id="upload-button"
                style={{ display: 'none' }}
                onChange={handleUpload}
            />
            <button type="submit" className="send-button">
                <SendOutlined className="send-icon"/>
            </button>
        </form>
    );
}

// export MessageForm
export default MessageForm;