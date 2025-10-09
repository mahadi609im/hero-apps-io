import React from 'react';

const LoadingUi = ({ count = 8 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="flex w-full flex-col gap-4 shadow-md p-4 rounded-sm"
        >
          <div className="skeleton h-[316px] w-full"></div>
          <div className="flex flex-col justify-between h-[110px]">
            <div className="skeleton h-7 w-full"></div>
            <div className="flex justify-between">
              <div className="skeleton h-8 w-[50px]"></div>
              <div className="skeleton h-8 w-[50px]"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoadingUi;
