// pages/index.js or src/app/page.jsx (based on your directory structure)
"use client";

import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { user: 'You', text: input }]);
      setInput("");
    }
  };

  return (
    <>
      <nav className="bg-indigo-600 p-4 flex justify-between items-center">
        <div className="text-white font-bold text-xl">MyApp</div>
        <button className="text-white bg-red-500 px-4 py-2 rounded-md hover:bg-red-600">
          Logout
        </button>
      </nav>
      
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">Chat with Us</h1>
          <div className="chat-box border rounded-lg h-96 p-4 overflow-y-scroll bg-gray-50 mb-4">
            {messages.map((message, index) => (
              <div key={index} className="mb-2">
                <strong>{message.user}:</strong> <span>{message.text}</span>
              </div>
            ))}
          </div>
          <div className="flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-grow p-2 border border-gray-300 rounded-md"
            />
            <button
              onClick={handleSendMessage}
              className="ml-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
