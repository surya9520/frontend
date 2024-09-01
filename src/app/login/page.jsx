// pages/login.js
"use client";
import React, { useState } from 'react';
import InputField from '../input/page';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all the fields");
      return;
    }

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        // Handle successful login
      } else {
        // Handle login error
      }
    } catch (error) {
      // Handle network error
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <InputField
            label="Email"
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required={true}
          />
          <InputField
            label="Password"
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required={true}
          />
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Login
          </button>
        </form>
        <div className="mt-6 flex items-center justify-center">
          <button className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            <img src="/path-to-google-icon.png" alt="Google icon" className="inline-block w-5 h-5 mr-2" />
            Sign in with Google
          </button>
        </div>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <a href="/register" className="text-indigo-600 hover:text-indigo-700">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
