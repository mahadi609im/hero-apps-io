import noResult from '../assets/noResult.png';

const DetailsError = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center bg-[#f5f5f5] py-8 px-[3%]">
      <div className="w-36 sm:w-48 h-auto mb-4">
        <img
          src={noResult}
          alt="No Results"
          className="w-full h-auto object-contain"
        />
      </div>
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-2">
        Apps Not Found
      </h2>
      <p className="text-gray-500 text-sm sm:text-base text-center">
        Oops! We couldn’t find the app you’re looking for. <br />
        It might have been removed, unpublished, or the URL is incorrect.
      </p>
      <div className="flex gap-4">
        <a
          href="/"
          className="mt-6 inline-block px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors border border-purple-600 font-medium"
        >
          Back To Home
        </a>
      </div>
    </div>
  );
};

export default DetailsError;
