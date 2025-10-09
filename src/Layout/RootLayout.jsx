import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';
import { Bounce, ToastContainer } from 'react-toastify';
import Footer from '../Components/Footer/Footer';
import LoadingDesign from '../Components/Loading/LoadingDesign';

const RootLayout = () => {
  const navigation = useNavigation();
  console.log(navigation.state === 'loading');

  return (
    <div className="flex flex-col min-h-screen h-auto">
      <Navbar></Navbar>
      {navigation.state === 'loading' ? (
        'Loading ..........................'
      ) : (
        <div className="flex-1 pb-[80px] bg-[#f5f5f5]">
          <Outlet></Outlet>
        </div>
      )}
      <Footer></Footer>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
};

export default RootLayout;
