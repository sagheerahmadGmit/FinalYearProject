// imports
import React, { useState } from 'react';
import axios from "axios";

// Function to login into the chat
const ChatLogin = () => {
    // constants
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // handle the submission
    const handleSubmit = async (e) => {
        // error handling
        e.preventDefault();

        // constant to get the projects id, username and password of the user
        const authObject = { 'Project-ID': "fc2e71eb-a64b-4391-8dd3-ad17bcc782f7", 'User-Name': username, 'User-Secret': password }


        try {
            // REST api
            await axios.get('https://api.chatengine.io/chats', { headers:authObject });

            // set the username and password for the user when creating a new account
            // the information is saved in localstorage
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            // reload the website
            window.location.reload();

          // catch errors
        } catch (e) {
            setError('Incorrect Details');
        }

    }

    return(
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    {/*check did the user fill out everything*/}
                    {/*if they did set the username and passowrd for them*/}
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required/>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required/>
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start chatting</span>
                        </button>
                    </div>
                </form>
                <h2 className="error">{error}</h2>
            </div>
        </div>
    );
}

// export ChatLogin
export default ChatLogin;