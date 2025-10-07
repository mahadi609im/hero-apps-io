import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen h-auto">
      <Navbar></Navbar>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
      <div>Footer</div>
    </div>
  );
};

export default RootLayout;
