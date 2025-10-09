import React, { useState } from 'react';
import useDataLoadHook from '../../hooks/useDataLoadHook';
import AppCard from '../../Components/AppCard';
import EmptyState from '../../Components/EmptyState';
import LoadingUi from '../../Components/Loading/LoadingUi';
import { TbAppsFilled } from 'react-icons/tb';
import LoadingDesign from '../../Components/Loading/LoadingDesign';

const Apps = () => {
  const { apps, loading } = useDataLoadHook();
  const [searchValue, setSearchValue] = useState('');
  const [searching, setSearching] = useState(false);

  if (loading) {
    return <LoadingDesign></LoadingDesign>;
  }

  const searchModify = searchValue.trim().toLowerCase();

  const handleSearch = data => {
    setSearching(true);
    setSearchValue(data);
    setTimeout(() => {
      setSearching(false);
    }, 1000);
  };

  const searchItem = searchModify
    ? apps.filter(appItem => appItem.title.toLowerCase().includes(searchModify))
    : apps;

  return (
    <div className="container mx-auto px-[3%] md:px-0 pt-[80px]">
      <div className="space-y-4 text-center mb-[40px]">
        <h2 className="text-[26px] md:text-[32px] lg:text-[48px] font-bold text-[#001931] text-center flex justify-center items-center gap-3">
          <span>Our All Applications</span>{' '}
          <TbAppsFilled className="text-[#632EE3]" />
        </h2>
        <p className="font-normal text-base md:text-lg lg:text-xl text-[#627382] text-center">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
        <h3 className="text-2xl font-semibold text-[#001931]">
          ({searchItem.length}) Apps Found
        </h3>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            onChange={e => handleSearch(e.target.value)}
            value={searchValue}
            type="search"
            required
            placeholder="Search"
          />
        </label>
      </div>
      {loading === true ? (
        <LoadingUi count={20}></LoadingUi>
      ) : searching === true ? (
        <LoadingUi count={searchItem.length}></LoadingUi>
      ) : (
        <div>
          {searchItem.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full">
              {searchItem.map(app => (
                <AppCard key={app.id} app={app}></AppCard>
              ))}
            </div>
          ) : (
            searchModify && <EmptyState></EmptyState>
          )}
        </div>
      )}
    </div>
  );
};

export default Apps;
