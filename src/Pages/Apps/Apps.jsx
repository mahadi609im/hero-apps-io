import React from 'react';
import useDataLoadHook from '../../hooks/useDataLoadHook';
import AppCard from '../../Components/AppCard';

const Apps = () => {
  const { apps } = useDataLoadHook();

  return (
    <div className="container mx-auto px-[3%] md:px-0 pt-[80px]">
      <div className="space-y-4 text-center mb-[40px]">
        <h2 className="text-[26px] md:text-[32px] lg:text-[48px] font-bold text-[#001931] text-center">
          Our All Applications
        </h2>
        <p className="font-normal text-base md:text-lg lg:text-xl text-[#627382] text-center">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        {apps.map(app => (
          <AppCard key={app.id} app={app}></AppCard>
        ))}
      </div>
    </div>
  );
};

export default Apps;
