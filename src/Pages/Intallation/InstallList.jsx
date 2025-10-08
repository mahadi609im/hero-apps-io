import React, { useContext } from 'react';
import iconDownloads from '../../assets/icon-downloads.png';
import iconRatings from '../../assets/icon-ratings.png';
import { UninstallContext } from './Installation';

const InstallList = ({ install }) => {
  const { id, title, appName, ratingAvg, downloads, size } = install;
  const handleUnInstall = useContext(UninstallContext);

  return (
    <div className="p-4 rounded-sm bg-white mb-4 flex justify-between items-center">
      <div className="flex gap-4 items-center">
        <div className="w-[80px] h-[80px] rounded-lg bg-[#D9D9D9]"></div>
        <div className="space-y-4">
          <h4 className="text-xl font-medium text-[#001931]">{title}</h4>
          <div className="flex gap-4">
            <p className=" text-[#00D390] font-medium text-base flex gap-2 items-center">
              <img className="w-4 h-4" src={iconDownloads} alt="" />
              <span>{downloads}M</span>
            </p>
            <p className="text-[#FF8811] font-medium text-base flex gap-2 items-center">
              <img className="w-4 h-4" src={iconRatings} alt="" />
              <span>{ratingAvg}</span>
            </p>
            <p className="text-[#627382] font-medium text-base flex gap-2 items-center">
              <span>{size} MB</span>
            </p>
          </div>
        </div>
      </div>
      <button
        onClick={() => handleUnInstall(id)}
        className="px-5 py-[12px] bg-[#00D390] text-white rounded-sm cursor-pointer"
      >
        Uninstall
      </button>
    </div>
  );
};

export default InstallList;
