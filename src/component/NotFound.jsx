
import React from 'react';
//import { Link } from 'react-router-dom';
import './notfound.css'; 

function Error() {
  return (
    <div className="error-page">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <a href="/">Go back to Home</a>
    </div>
  );
}

export default Error ;