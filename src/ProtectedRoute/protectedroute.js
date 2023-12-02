import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // Replace the logic below with whatever method you use to check if a user is authenticated
  const isAuthenticated = localStorage.getItem('token'); // or another authentication check

  if (!isAuthenticated) {
    // User is not authenticated, redirect to the login page
    return <Navigate to="/" />;
  }

  return children; // User is authenticated, render the protected component
};

export default ProtectedRoute;
