import React from 'react';
import logo from '../../assets/logo.png';

const LoadingDesign = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 rounded-xl mt-10 sm:mx-auto w-full ontainer mx-auto px-[3%] md:px-0">
      <h2 className="text-[48px] font-semibold text-gray-700 text-center flex items-center">
        L
        <img
          className="w-[48px] h-[48px] object-cover animate-spin"
          src={logo}
          alt=""
        />
        ading...
      </h2>
    </div>
  );
};

export default LoadingDesign;
