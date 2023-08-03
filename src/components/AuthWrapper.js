// AuthWrapper.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthWrapper = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the authentication token is available in localStorage
    const authToken = localStorage.getItem('auth-token');

    // If the token is NOT available, redirect to the login page
    if (!authToken) {
      navigate("/login");
    }

  }, []); // Include the navigate function in the dependency array

  return <>{children}</>;
};

export default AuthWrapper;
