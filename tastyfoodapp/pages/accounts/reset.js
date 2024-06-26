import React, { useState } from 'react';
import Layout from "@/components/layout";

export default function Reset() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmation = (e) => {
    setConfirmation(e.target.value);
  }

  const handleSubmit = (e) => {

    e.preventDefault(); // Prevent default form submission
    if (username.length == 0) {
      alert("No username inputted");
    } else if (password != confirmation) {
      alert("Your passwords do not match!");
    } else { // this doesn't actually save the information anywhere. I want to try and write this into the .env file,
      // but it keeps saying that fs (which is the required module) is not found
      alert(`Submitted text: ${username} ${password} ${confirmation}`);
    }
    // check to make sure that the username is not already in the .env file
  

     // Display the text box content
  };

  return (
    <Layout>
      <main className="flex min-h-screen flex-col items-center p-24">
        <h1 className="text-3xl font-bold">Reset your Password</h1>
        <p>Enter your username and your new password. If</p>
        <form onSubmit={handleSubmit}> {/* Form now wraps the entire content */}
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
              Username:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
              value={username}
              onChange={handleUsername}
              style={{ color: 'black', paddingLeft: '10px' }}
              id="username"
            />

            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Set new password:
            </label>
            <input
              type="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
              style={{ color: 'black', paddingLeft: '10px' }}
              value={password}
              onChange={handlePassword}
              id="password"
            />

            <label htmlFor="confirm-password" className="block text-gray-700 text-sm font-bold mb-2">
              Confirm Password:
            </label>
            <input
              type="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
              value={confirmation}
              onChange={handleConfirmation}
              style={{ color: 'black', paddingLeft: '10px' }}
              id="confirm-password"
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign up!
            </button>
          </div>
        </form>
      </main>
    </Layout>
  );
}
