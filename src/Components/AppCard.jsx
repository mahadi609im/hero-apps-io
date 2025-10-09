import React from 'react';
import iconDownloads from '../assets/icon-downloads.png';
import iconRatings from '../assets/icon-ratings.png';
import { useNavigate } from 'react-router';

const AppCard = ({ app }) => {
  const { id, image, title, ratingAvg, downloads } = app;

  const navigate = useNavigate('');

  return (
    <div
      onClick={() => navigate(`/appsDetails/${id}`)}
      className="w-full p-4 rounded-sm bg-white space-y-4 cursor-pointer ease-in-out hover:shadow-xl  shadow-md transform hover:scale-105 transition-all duration-300 hover:skeleton"
    >
      <div className=" w-full h-[316px] bg-[#D9D9D9] rounded-lg flex justify-center items-center">
        <img
          className="max-w-4/5 w-full h-auto object-contain"
          src={image}
          alt=""
        />
      </div>
      <div className="flex flex-col justify-between h-[110px]">
        <h4 className="text-xl font-medium text-[#001931]">{title}</h4>
        <div className="flex justify-between items-center">
          <p className="px-[10px] py-[6px] text-[#00D390] font-medium text-base bg-[#F1F5E8] rounded-sm flex gap-2 items-center">
            <img className="w-4 h-4" src={iconDownloads} alt="" />
            <span>{downloads}M</span>
          </p>
          <p className="px-[10px] py-[6px] text-[#FF8811] font-medium text-base bg-[#FFF0E1] rounded-sm flex gap-2 items-center">
            <img className="w-4 h-4" src={iconRatings} alt="" />
            <span>{ratingAvg}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
