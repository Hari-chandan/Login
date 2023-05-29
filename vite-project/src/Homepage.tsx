import React, { useState, ChangeEvent } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

const HomePage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSigninModalOpen, setIsSigninModalOpen] = useState(false);

  const handleLogin = () => {
    // Open the login modal
    setIsLoginModalOpen(true);
  };

  const handleSignin = () => {
    // Open the signin modal
    setIsSigninModalOpen(true);
  };

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUsername(value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
  };

  const closeModal = () => {
    // Close both the login and signin modals
    setIsLoginModalOpen(false);
    setIsSigninModalOpen(false);
  };

  const handleLoginSubmit = () => {
    // Make an API call to authenticate the user
    axios
      .post('http://localhost:3001/api/authenticate', {
        username: username,
        password: password,
        action: 'login',
      })
      .then(response => {
        // Handle the response from the API
        const message = response.data.message;
        alert(message);
        closeModal();
      })
      .catch(error => {
        // Handle any errors
        console.error(error);
      });
  };

  const handleSigninSubmit = () => {
    // Make an API call to create a new user
    axios
      .post('http://localhost:3001/api/authenticate', {
        username: username,
        password: password,
        action: 'signin',
      })
      .then(response => {
        // Handle the response from the API
        const message = response.data.message;
        alert(message);
        closeModal();
      })
      .catch(error => {
        // Handle any errors
        console.error(error);
      });
  };

  return (
    <div>
      <header className="header">
        <div className="logo">Logo</div>
        <div className="buttons">
          <button className="button" onClick={handleLogin}>
            Login
          </button>
          <button className="button" onClick={handleSignin}>
            Signin
          </button>
        </div>
      </header>

      <div className="content">
        <h2>Welcome to the Homepage</h2>
        <p>Some attractive content goes here...</p>
      </div>

      {/* Login Modal */}
      <Modal
        isOpen={isLoginModalOpen}
        onRequestClose={closeModal}
        contentLabel="Login Modal"
        className="modal"
        overlayClassName="overlay"
      >
        <h2>Login</h2>
        <form>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
            className="input"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            className="input"
          />
          <button onClick={handleLoginSubmit} className="actionButton">
            Login
          </button>
          <button onClick={closeModal} className="actionButton">
            Close
          </button>
        </form>
      </Modal>

      {/* Signin Modal */}
      <Modal
        isOpen={isSigninModalOpen}
        onRequestClose={closeModal}
        contentLabel="Signin Modal"
        className="modal"
        overlayClassName="overlay"
      >
        <h2>Signin</h2>
        <form>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
            className="input"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            className="input"
          />
          <button onClick={handleSigninSubmit} className="actionButton">
            Signin
          </button>
          <button onClick={closeModal} className="actionButton">
            Close
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default HomePage;
