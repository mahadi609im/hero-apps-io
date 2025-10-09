import useDataLoadHook from '../../hooks/useDataLoadHook';
import { useParams } from 'react-router';
import iconDownloads from '../../assets/icon-downloads.png';
import iconRatings from '../../assets/icon-ratings.png';
import iconReview from '../../assets/icon-review.png';
import {
  getInstalledData,
  setInstalledData,
} from '../../utility/InstalledStore';
import { useEffect, useState } from 'react';
import { Bounce, toast } from 'react-toastify';
import BarChartsRating from '../../Components/BarCharts/BarChartsRatings';
import LoadingDesign from '../../Components/Loading/LoadingDesign';
import DetailsError from '../../Components/detailsError';

const AppsDetails = () => {
  const { apps, loading } = useDataLoadHook();

  const { detailsId } = useParams();

  const appsDetailsData = apps.find(app => String(app.id) === detailsId);

  const {
    id,
    title,
    appName,
    image,
    companyName,
    downloads,
    ratingAvg,
    reviews,
    description,
    size,
    ratings,
  } = appsDetailsData || {};

  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const installedStoredApps = getInstalledData();

    if (installedStoredApps.includes(id)) {
      setIsInstalled(true);
    }
  }, [id]);

  const handleInstalled = id => {
    setInstalledData(id);
    toast.success(`${appName} Install successfully`, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
      transition: Bounce,
    });
    setIsInstalled(true);
  };

  return (
    <>
      {loading === true ? (
        <div className="flex justify-center items-center min-h-[50vh] h-full">
          <LoadingDesign></LoadingDesign>
        </div>
      ) : (
        <div>
          {!appsDetailsData ? (
            <DetailsError></DetailsError>
          ) : (
            <div className="container mx-auto px-[3%] md:px-0 mt-[56px] md:mt-[72px] lg:mt-[80px] ">
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-[40px]">
                <div className="w-full md:w-[350px] h-auto md:h-[350px] p-6">
                  <img
                    className="max-w-1/2 md:max-w-4/5 w-full h-auto object-cover"
                    src={image}
                    alt=""
                  />
                </div>
                <div className="w-full">
                  <div>
                    <h2 className="text-[#001931] font-bold text-[26px] md:text-[32px]">
                      {title}
                    </h2>
                    <p className="text-[#627382] font-normal text-base md:text-xl">
                      Developed by{' '}
                      <span className="font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                        {companyName}
                      </span>
                    </p>
                  </div>
                  <div className="w-full border-b border-[#00193126] my-[30px]"></div>
                  <div className="flex flex-wrap pl-5 md:pl-0 gap-4 md:gap-6">
                    <div className="space-y-2 w-[150px]">
                      <img
                        className="w-[32px] h-[32px] md:w-[40px] md:h-[40px]"
                        src={iconDownloads}
                        alt=""
                      />
                      <p className="font-normal text-base text-[#001931]">
                        Downloads
                      </p>
                      <h2 className="font-extrabold text-[32px] md:text-[40px] text-[#001931]">
                        {downloads}M
                      </h2>
                    </div>
                    <div className="space-y-2 w-[150px]">
                      <img
                        className="w-[32px] h-[32px] md:w-[40px] md:h-[40px]"
                        src={iconRatings}
                        alt=""
                      />
                      <p className="font-normal text-base text-[#001931]">
                        Average Ratings
                      </p>
                      <h2 className="font-extrabold text-[32px] md:text-[40px] text-[#001931]">
                        {ratingAvg}
                      </h2>
                    </div>
                    <div className="space-y-2 w-[150px]">
                      <img
                        className="w-[32px] h-[32px] md:w-[40px] md:h-[40px]"
                        src={iconReview}
                        alt=""
                      />
                      <p className="font-normal text-base text-[#001931]">
                        Total Reviews
                      </p>
                      <h2 className="font-extrabold text-[32px] md:text-[40px] text-[#001931]">
                        {reviews}K
                      </h2>
                    </div>
                  </div>
                  <button
                    onClick={() => handleInstalled(id)}
                    disabled={isInstalled}
                    className={`px-5 py-[12px] rounded-sm mt-[30px] text-white font-medium transition-all  ${
                      isInstalled
                        ? 'bg-green-300 cursor-not-allowed'
                        : 'bg-[#00D390] hover:bg-[#00b377] cursor-pointer shadow-xl skeleton'
                    }`}
                  >
                    {isInstalled ? 'Installed' : `Install Now (${size} MB)`}
                  </button>
                </div>
              </div>
              <div className="w-full border-b border-[#00193126] my-[40px]"></div>
              <div className="h-[354px]  mb-[40px]">
                <BarChartsRating data={ratings}></BarChartsRating>
              </div>
              <div className="mt-8">
                <h4 className="text-2xl font-semibold text-[#00D390 mb-6">
                  Description
                </h4>
                <p className="font-normal text-base md:text-lg lg:text-xl text-[#627382]">
                  {description}
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default AppsDetails;
