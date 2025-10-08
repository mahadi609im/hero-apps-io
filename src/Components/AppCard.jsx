import React from 'react';
import { LuDownload } from 'react-icons/lu';
import iconDownloads from '../assets/icon-downloads.png';
import iconRatings from '../assets/icon-ratings.png';

const AppCard = ({ app }) => {
  const { title, ratingAvg, downloads } = app;
  return (
    <div className="w-full p-4 rounded-sm bg-white space-y-4 shadow-lg">
      <div className="w-full h-[316px] bg-[#D9D9D9] rounded-lg"></div>
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
  );
};

export default AppCard;
