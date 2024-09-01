// pages/register.js
"use client";
import React, { useState } from 'react';
import InputField from '../input/page';
import Link from 'next/link';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });
      if (response.ok) {
        // Handle successful registration
      } else {
        // Handle registration error
      }
    } catch (error) {
      // Handle network error
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <InputField
            label="Name"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required={true}
          />
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
            Register
          </button>
        </form>
        <div className="mt-6 flex items-center justify-center">
          <button className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            <img src="/path-to-google-icon.png" alt="Google icon" className="inline-block w-5 h-5 mr-2" />
            Sign up with Google
          </button>
        </div>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <Link href="/login" className="text-indigo-600 hover:text-indigo-700">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
