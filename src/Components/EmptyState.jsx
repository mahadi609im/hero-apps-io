import React from 'react';
import AppNot from '../assets/AppNot.png';

const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl mt-10 sm:mx-auto w-full ontainer mx-auto px-[3%] md:px-0">
      <div className="w-36 sm:w-48 h-auto mb-4">
        <img
          src={AppNot}
          alt="No Results"
          className="w-full h-auto object-contain"
        />
      </div>

      <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 text-center">
        No Apps Found
      </h2>

      <p className="text-gray-500 text-center mt-2 text-sm sm:text-base">
        Sorry, we couldn't find any apps matching your search. Try adjusting
        your filters or search again.
      </p>
    </div>
  );
};

export default EmptyState;
