import React from 'react';
import './MailSignup.css'; // Import the CSS file for styling

const MailSignup = () => {
  return (
    <div className="mail-signup">
      <div className="signup-text">
        Sign up for our daily insider
      </div>
      <div className="gmail-input">
        <input type="email" placeholder="Enter your Gmail" />
        <button className="signup-button">Sign Up</button>
      </div>
    </div>
  );
};

export default MailSignup;
