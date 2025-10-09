import Navbar from '../Components/Navbar/Navbar';
import { Bounce, ToastContainer } from 'react-toastify';
import Footer from '../Components/Footer/Footer';
import error from '../assets/error-404.png';

const ErrorPage = () => {
  return (
    <div className="flex flex-col min-h-screen h-auto">
      <Navbar></Navbar>
      <div className="flex flex-1 flex-col items-center justify-center min-h-[80vh] text-center bg-[#f5f5f5] py-8 px-[3%]">
        <div className="w-36 sm:w-48 h-auto mb-4">
          <img
            src={error}
            alt="No Results"
            className="w-full h-auto object-contain"
          />
        </div>
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-2">
          Page Not Found
        </h2>
        <p className="text-gray-500 text-sm sm:text-base">
          Oops! The page you are looking for doesn't exist. <br />
          It might have been removed, renamed, or is temporarily unavailable.
        </p>
        <div className="flex gap-4">
          <a
            href="/"
            className="mt-6 inline-block px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors border border-purple-600 font-medium"
          >
            Back To Home
          </a>
          <a
            href="/apps"
            className="mt-6 inline-block px-6 py-3 text-purple-700 font-medium rounded-lg transition-colors border border-purple-600 hover:bg-purple-200"
          >
            Browes Apps
          </a>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;
