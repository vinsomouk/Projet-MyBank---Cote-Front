// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Register from './components/Register';
import Dashboard from './pages/Dashboard';
import AddMoney from './pages/AddMoney';
import SendMoney from './pages/SendMoney';
import Profile from './pages/Profile';

import RequireAuth from './components/RequireAuth';
import PrivateLayout from './layouts/PrivateLayout';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>

        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected routes with layout */}
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <PrivateLayout>
                <Dashboard />
              </PrivateLayout>
            </RequireAuth>
          }
        />
        <Route
          path="/add-money"
          element={
            <RequireAuth>
              <PrivateLayout>
                <AddMoney />
              </PrivateLayout>
            </RequireAuth>
          }
        />
        <Route
          path="/send-money"
          element={
            <RequireAuth>
              <PrivateLayout>
                <SendMoney />
              </PrivateLayout>
            </RequireAuth>
          }
        />
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <PrivateLayout>
                <Profile />
              </PrivateLayout>
            </RequireAuth>
          }
        />

        {/* Default redirect to dashboard if logged in */}
        <Route
          path="/"
          element={
            <RequireAuth>
              <PrivateLayout>
                <Dashboard />
              </PrivateLayout>
            </RequireAuth>
          }
        />
        
      </Routes>
    </Router>
  );
};

export default App;
