import React from 'react';
import playStore from '../../assets/playStore.png';
import appStore from '../../assets/appStore.png';
import hero from '../../assets/hero.png';

const Banner = () => {
  return (
    <div className="mb-[80px]">
      <div className="pt-12 md:pt-14 lg:pt-20 container mx-auto px-[3%] md:px-0">
        <div className="flex items-center flex-col justify-center">
          <h1 className="lg:max-w-[597px] w-full mx-auto text-5xl md:text-[56px] lg:text-[72px] text-center font-bold">
            We Build{' '}
            <span className="font-black bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              Productive
            </span>{' '}
            Apps
          </h1>
          <p className="max-w-[1000px] mx-auto font-normal text-base md:text-lg lg:text-xl text-[#627382] text-center mt-4">
            At HERO.IO , we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting.Our goal is to turn your ideas
            into digital experiences that truly make an impact.
          </p>
          <div className="mt-[40px] flex gap-4">
            <a
              href="https://play.google.com/store/games?hl=en"
              target="_blank"
              className="py-3 px-[22.5px] rounded-sm border border-[#D2D2D2] font-semibold text-base md:text-lg lg:text-xl text-[#001931] flex gap-[10px] hover:bg-white hover:scale-105 transition-all ease-in-out"
            >
              <img className="w-6 h-6 md:w-8 md:h-8" src={playStore} alt="" />
              <span>Play Store</span>
            </a>
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              className="py-3 px-[22.5px] rounded-sm border border-[#D2D2D2] font-semibold text-base md:text-lg lg:text-xl text-[#001931] flex gap-[10px] hover:bg-white hover:scale-105 transition-all ease-in-out"
            >
              <img className="w-8 h-8" src={appStore} alt="" />
              <span>App Store</span>
            </a>
          </div>
        </div>
        <div className="max-w-2/3 md:max-w-1/2 w-full mx-auto h-auto mt-[40px]">
          <img className="w-full h-full" src={hero} alt="" />
        </div>
      </div>
      <div className="p-8 md:p-[56px] lg:p-[80px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] flex flex-col gap-[40px]">
        <h3 className="text-[26px] md:text-[32px] lg:text-[48px] font-bold text-white text-center">
          Trusted by Millions, Built for You
        </h3>
        <div className="flex flex-wrap gap-6 justify-center items-center">
          <div className="max-w-[342px] w-full text-center  space-y-4">
            <p className="text-base font-normal text-white">Total Downloads</p>
            <h3 className="text-[48px] md:text-[56px] lg:text-[64px] font-extrabold text-white">
              29.6M
            </h3>
            <p className="text-base font-normal text-white">
              21% more than last month
            </p>
          </div>
          <div className="max-w-[342px] w-full text-center space-y-4">
            <span className="text-base font-normal text-white">
              Total Downloads
            </span>
            <h3 className="text-[48px] md:text-[56px] lg:text-[64px] font-extrabold text-white">
              29.6M
            </h3>
            <p className="text-base font-normal text-white">
              21% more than last month
            </p>
          </div>
          <div className="max-w-[342px] w-full text-center space-y-4">
            <span className="text-base font-normal text-white">
              Total Downloads
            </span>
            <h3 className="text-[48px] md:text-[56px] lg:text-[64px] font-extrabold text-white">
              29.6M
            </h3>
            <p className="text-base font-normal text-white">
              21% more than last month
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
