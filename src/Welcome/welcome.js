import React from 'react';
import './welcome.css'; // Import the CSS file for styling

function Welcome() {
  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <h1>Welcome to Our College</h1>
        <p>Unlocking Your Potential, Transforming Your Future</p>
        <a href="/login">Login</a>
      </div>
    </div>
  );
}

export default Welcome;
