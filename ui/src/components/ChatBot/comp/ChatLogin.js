import React, { useState } from 'react';
import axios from "axios";

const ChatLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = { 'Project-ID': "fc2e71eb-a64b-4391-8dd3-ad17bcc782f7", 'User-Name': username, 'User-Secret': password }

        try {
            await axios.get('https://api.chatengine.io/chats', { headers:authObject });

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            window.location.reload();

        } catch (e) {
            setError('Incorrect Details');
        }

    }

    return(
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
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

export default ChatLogin;