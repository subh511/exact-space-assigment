import React, { useState } from 'react';
import './chat.css';

const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];

function ChatApp() {
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSend = () => {
    if (message.trim() !== '') {
      const username = user_list[Math.floor(Math.random() * user_list.length)];
      const newMessage = { username, message, likes: 0 };
      setChatMessages([...chatMessages, newMessage]);
      setMessage('');
    }
  };

  const handleLike = (index) => {
    const updatedMessages = [...chatMessages];
    updatedMessages[index].likes++;
    setChatMessages(updatedMessages);
  };

  return (
    <div className="App">
      <div className="chat-container">
        <div className="message-thread">
          {chatMessages.map((chat, index) => (
            <div key={index} className="chat-message">
              <div className="username">{chat.username}</div>
              <div className="message-text">{chat.message}</div>
              <button className="like-button" onClick={() => handleLike(index)}>
                Like ({chat.likes})
              </button>
            </div>
          ))}
        </div>
        <div className="input-container">
          <input
            type="text"
            value={message}
            onChange={handleChange}
            placeholder="Type your message..."
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default ChatApp;
