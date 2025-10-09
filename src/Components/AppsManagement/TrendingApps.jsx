import React from 'react';
import useDataLoadHook from '../../hooks/useDataLoadHook';
import AppCard from '../AppCard';
import { useNavigate } from 'react-router';
import LoadingUi from '../Loading/LoadingUi';

const TrendingApps = () => {
  const { apps, loading } = useDataLoadHook();
  const appsSlice = apps.slice(0, 8);
  const navigate = useNavigate('');

  return (
    <div className="container mx-auto px-[3%] md:px-0">
      <div className="space-y-4 text-center mb-[40px]">
        <h2 className="text-[26px] md:text-[32px] lg:text-[48px] font-bold text-[#001931] text-center">
          Trending Apps
        </h2>
        <p className="font-normal text-base md:text-lg lg:text-xl text-[#627382] text-center">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      {loading === true ? (
        <LoadingUi></LoadingUi>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {appsSlice &&
            appsSlice.map(app => <AppCard key={app.id} app={app}></AppCard>)}
        </div>
      )}
      <div className="flex justify-center items-center mt-[40px]">
        <button
          onClick={() => navigate('/apps')}
          className="py-[14.5px] px-[40.5px] rounded-md md:rounded-lg bg-gradient-to-r from-[#632EE3] to-[#9F62F2] p-6 shadow-lg text-white text-base font-semibold cursor-pointer flex items-center gap-[10px] hover:scale-105 transition-all ease-in-out"
        >
          See All
        </button>
      </div>
    </div>
  );
};

export default TrendingApps;
