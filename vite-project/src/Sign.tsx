import React, { useState } from 'react';

function Sign() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleLogin = async () => {
    const response = await fetch('http://localhost:3001/api/authenticate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
        action: 'login',
      }),
    });

    const data = await response.json();
    setResponseMessage(data.message); // Store the response message in state
  };

  const handleSignup = async () => {
    const response = await fetch('http://localhost:3001/api/authenticate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
        action: 'signin',
      }),
    });

    const data = await response.json();
    setResponseMessage(data.message); // Store the response message in state
  };

  return (
    <div>
      <h2>Login</h2>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br></br>
      <br></br>
       <label htmlFor="password">Password:</label>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br></br>
      <br></br>
      <button onClick={handleLogin}>Login</button>
      <br></br>
      <br></br>
      <button onClick={handleSignup}>Sign Up</button>
      {responseMessage && <p>{responseMessage}</p>} {/* Display the response message if it exists */}
    </div>
  );
}

export default Sign;
