import React, { createContext, useEffect, useState } from 'react';
import {
  getInstalledData,
  removeInstalledItem,
} from '../../utility/InstalledStore';
import useDataLoadHook from '../../hooks/useDataLoadHook';
import InstallList from './InstallList';
import {
  TbSortAscendingNumbers,
  TbSortDescendingNumbers,
} from 'react-icons/tb';
import { MdDownload } from 'react-icons/md';
import { Bounce, toast } from 'react-toastify';
import LoadingDesign from '../../Components/Loading/LoadingDesign';

const UninstallContext = createContext('');

const Installation = () => {
  const [installed, setInstalled] = useState([]);
  const { apps, loading } = useDataLoadHook();

  useEffect(() => {
    let InstalledStoreData = getInstalledData();
    const installedApps =
      apps && apps.filter(app => InstalledStoreData.includes(app.id));
    setInstalled(installedApps);
  }, [apps]);

  // sort functionality
  const [selected, setSelected] = useState('Sort by Download or Size');
  const [open, setOpen] = useState(false);

  const options = [
    'Download: Low to High',
    'Download: High to Low',
    'Size: Low to High',
    'Size: High to Low',
  ];

  const handleSort = sortType => {
    setSelected(sortType);
    if (sortType === 'Download: Low to High') {
      let sortInstalled = [...installed].sort(
        (a, b) => a.downloads - b.downloads
      );
      setInstalled(sortInstalled);
    } else if (sortType === 'Download: High to Low') {
      let sortInstalled = [...installed].sort(
        (a, b) => b.downloads - a.downloads
      );
      setInstalled(sortInstalled);
    } else if (sortType === 'Size: Low to High') {
      let sortInstalled = [...installed].sort((x, y) => x.size - y.size);
      setInstalled(sortInstalled);
    } else if (sortType === 'Size: High to Low') {
      let sortInstalled = [...installed].sort((x, y) => y.size - x.size);
      setInstalled(sortInstalled);
    }
  };

  const handleUninstal = id => {
    removeInstalledItem(id);
    const newInstallItem = installed.filter(app => app.id !== id);
    setInstalled(newInstallItem);
    const unInstallItem = installed.filter(app => app.id === id);
    toast.success(
      `${unInstallItem.map(el => el.appName)} UnInstall Successfully`,
      {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      }
    );
  };

  return (
    <div className="container mx-auto px-[3%] md:px-0 pt-[80px]">
      <div className="space-y-4 text-center mb-[40px]">
        <h2 className="text-[26px] md:text-[32px] lg:text-[48px] font-bold text-[#001931] text-center">
          Your Installed Apps
        </h2>
        <p className="font-normal text-base md:text-lg lg:text-xl text-[#627382] text-center">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
        <h3 className="text-2xl font-semibold text-[#001931]">
          {installed.length} Apps Installed
        </h3>
        <div className="relative inline-block">
          {/* Gradient Button */}
          <button
            disabled={installed.length < 2 && true}
            onClick={() => {
              setOpen(!open);
            }}
            className="select relative p-[2px] border cursor-pointer min-w-[250px] w-full"
          >
            <span className=" py-[11px] px-3  text-sm font-medium flex items-center justify-between gap-2 ">
              {selected}
            </span>
          </button>

          {/* Dropdown Menu */}
          {open && (
            <div className="absolute mt-4 bg-white shadow-lg border border-[#dbdbdb]  z-50 w-full">
              {options.map(option => (
                <ul key={option}>
                  {option === 'Download: Low to High' && (
                    <li
                      onClick={() => {
                        handleSort(option);
                        setOpen(false);
                      }}
                      className="px-4 py-3 hover:bg-[#f0f0f0] cursor-pointer text-base bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-medium flex items-center gap-2"
                    >
                      <MdDownload className="text-lg text-[#632EE3] font-medium" />
                      Low to High
                    </li>
                  )}
                  {option === 'Download: High to Low' && (
                    <li
                      onClick={() => {
                        handleSort(option);
                        setOpen(false);
                      }}
                      className="px-4 py-3 hover:bg-[#f0f0f0] cursor-pointer text-base bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-medium flex items-center gap-2"
                    >
                      <MdDownload className="text-lg text-[#632EE3] font-medium" />
                      High to Low
                    </li>
                  )}
                  {option === 'Size: Low to High' && (
                    <li
                      onClick={() => {
                        handleSort(option);
                        setOpen(false);
                      }}
                      className="px-4 py-3 hover:bg-[#f0f0f0] cursor-pointer text-base bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-medium flex items-center gap-2"
                    >
                      <TbSortAscendingNumbers className="text-lg text-[#632EE3] font-medium" />
                      Low to High
                    </li>
                  )}
                  {option === 'Size: High to Low' && (
                    <li
                      onClick={() => {
                        handleSort(option);
                        setOpen(false);
                      }}
                      className="px-4 py-3 hover:bg-[#f0f0f0] cursor-pointer text-base bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-medium flex items-center gap-2"
                    >
                      <TbSortDescendingNumbers className="text-lg text-[#632EE3] font-medium" />
                      High to Low
                    </li>
                  )}
                </ul>
              ))}
            </div>
          )}
        </div>
      </div>

      <div>
        {loading === true ? (
          <LoadingDesign></LoadingDesign>
        ) : (
          <div>
            {installed.length > 0 ? (
              installed.map(install => (
                <UninstallContext.Provider
                  key={install.id}
                  value={handleUninstal}
                >
                  <InstallList key={install.id} install={install}></InstallList>
                </UninstallContext.Provider>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center p-8 rounded-xl mt-10 w-full container mx-auto px-[3%] md:px-0">
                <h2 className="text-base md:text-lg lg:text-xl text-[#627382] text-center">
                  No apps installed
                </h2>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Installation;
export { UninstallContext };
