import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './messaging.css';

function Messaging(props) {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const value = localStorage.getItem('username');

    // Function to fetch messages
    const fetchMessages = async () => {
        const response = await axios.get(`/api/messages/${value}/${props.name}`);
        console.log(response.data)
        setMessages(response.data);
    };

    // Function to send a message
    const sendMessage = async () => {
        await axios.post('/api/messages', {
            content: newMessage,
            from: value,
            to: props.name
        });
        setNewMessage('');
        fetchMessages(); // Refresh messages after sending
    };

    // Fetch messages on component mount
    useEffect(() => {
        fetchMessages();
    }, []);

    return (
        <div className="messaging-container">
            <div className="messages-window">
                {messages.map((msg) => (
                    <div key={msg._id} className={`message ${msg.from === value ? 'sent' : 'received'}`}>
                        <p className="message-sender">{msg.from === value ? 'You' : props.name}</p>
                        <p className="message-content">{msg.content}</p>
                    </div>
                ))}
            </div>
            <div className="message-input">
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
}

export default Messaging;