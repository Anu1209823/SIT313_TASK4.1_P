import React from 'react';
import './Header.css'; // Import the CSS file

const HeaderComponent = () => {
  return (
    <header className="custom-header">
      <div className="header-controls">
        <div className="dev-deakin-left">DEV@Deakin</div>
        <div className="ui input search-input">
          <input type="text" placeholder="Search..." />
          <i className="search icon"></i>
        </div>
        <div className="button-group">
          <button className="ui button">Post</button>
          <button className="ui button">Login</button>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
