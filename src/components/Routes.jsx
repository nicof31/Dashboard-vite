// Routes.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import App from '../App';
import Login from './login';

const RoutesComponent = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={isAuthenticated ? <App /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default RoutesComponent;
