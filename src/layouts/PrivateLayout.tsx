// src/layouts/PrivateLayout.tsx
import React from 'react';
import Navbar from '../components/NavBar';

const PrivateLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default PrivateLayout;
