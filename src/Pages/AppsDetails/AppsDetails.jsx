import React from 'react';
import useDataLoadHook from '../../hooks/useDataLoadHook';
import { useParams } from 'react-router';
import iconDownloads from '../../assets/icon-downloads.png';
import iconRatings from '../../assets/icon-ratings.png';
import iconReview from '../../assets/icon-review.png';
import { setInstalledData } from '../../utility/InstalledStore';

const AppsDetails = () => {
  const { apps } = useDataLoadHook();

  const { detailsId } = useParams();
  const paramsId = parseInt(detailsId);

  const appsDetailsData = apps.find(app => app.id === paramsId);
  const {
    id,
    title,
    companyName,
    downloads,
    ratingAvg,
    reviews,
    description,
    size,
  } = appsDetailsData || {};

  const handleInstalled = id => {
    setInstalledData(id);
    console.log(id);
  };

  return (
    <div className="container mx-auto px-[3%] md:px-0 mt-[80px] ">
      <div className="flex gap-[40px]">
        <div className="w-[350px] h-[350px] bg-[#D9D9D9] rounded-sm"></div>
        <div className="w-full">
          <div>
            <h2 className="text-[#001931] font-bold text-[26px] md:text-[32px]">
              {title}
            </h2>
            <p className="text-[#627382] font-normal text-base md:text-xl">
              Developed by
              <span className="font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                {companyName}
              </span>
            </p>
          </div>
          <div className="w-full border-b border-[#00193126] my-[30px]"></div>
          <div className="flex flex-wrap gap-6">
            <div className="space-y-2 w-[150px]">
              <img className="w-[40px] h-[40px]" src={iconDownloads} alt="" />
              <p className="font-normal text-base text-[#001931]">Downloads</p>
              <h2 className="font-extrabold text-[40px] text-[#001931]">
                {downloads}M
              </h2>
            </div>
            <div className="space-y-2 w-[150px]">
              <img className="w-[40px] h-[40px]" src={iconRatings} alt="" />
              <p className="font-normal text-base text-[#001931]">
                Average Ratings
              </p>
              <h2 className="font-extrabold text-[40px] text-[#001931]">
                {ratingAvg}
              </h2>
            </div>
            <div className="space-y-2 w-[150px]">
              <img className="w-[40px] h-[40px]" src={iconReview} alt="" />
              <p className="font-normal text-base text-[#001931]">
                Total Reviews
              </p>
              <h2 className="font-extrabold text-[40px] text-[#001931]">
                {reviews}K
              </h2>
            </div>
          </div>
          <button
            onClick={() => handleInstalled(id)}
            className="px-5 py-[12px] bg-[#00D390] text-white rounded-sm mt-[30px] cursor-pointer"
          >
            Install Now ({size} MB)
          </button>
        </div>
      </div>
      <div className="w-full border-b border-[#00193126] my-[40px]"></div>
      <div>
        <h4 className="text-2xl font-semibold text-[#00D390 mb-6">
          Description
        </h4>
        <p className="font-normal text-base md:text-lg lg:text-xl text-[#627382]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AppsDetails;
