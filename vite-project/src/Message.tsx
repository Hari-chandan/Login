import React, { useState } from 'react';
import './index.css'; 

const Message: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Make a POST request to the login endpoint
    fetch('http://localhost:3001/api/login',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        setLoginMessage(data.message); // Set the login message in state
      })
      .catch((error) => {
        console.error('An error occurred:', error);
      });
  };

  return (
    <div className="login-container">
      <center>
      <h1>Login Page</h1>
      {loginMessage && <p>{loginMessage}</p>} {/* Display the login message */}
      <form onSubmit={handleSubmit}>
        <div>
            <center>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={username} onChange={handleUsernameChange} />
          </center>
        </div>
        <div>
        <br></br>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} />
        </div>
        <br></br>
        <button type="submit">Login</button>
      </form>
      </center>
    </div>
  );
};

export default Message;
