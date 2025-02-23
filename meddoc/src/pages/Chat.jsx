import React, { useState } from 'react';
import '../Chat.css';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleInputChange = (event) => {
    setNewMessage(event.target.value);
    event.target.style.height = "auto";
    event.target.style.height = `${event.target.scrollHeight}px`;
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, newMessage]);
      setNewMessage("");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="chat-container">
      {/* Header Section */}
      <div className="chat-header">
        <h1 className="chat-title">
          <span className="med">med</span><span className="doc">Doc</span>
        </h1>
      </div>

      {/* Chat Messages */}
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className="message-bubble">
            {msg}
          </div>
        ))}
      </div>

      {/* Chat Input */}
      <div className="chat-input">
        <textarea
          className="message-input"
          value={newMessage}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Type a new message..."
          rows={1}
        />
        <button onClick={handleSendMessage} className="send-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#879B87">
            <path d="M4 2 L20 12 L4 22 Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Chat;
