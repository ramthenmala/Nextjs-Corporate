import React from 'react';

const IntroOverlay = () => {
  return (
    <div className="">
      <div className="h-[50vh] w-full absolute z-10 grid grid-cols-3">
        <div className="absolute bottom-0 right-0 left-0 bg-black h-full z-10"></div>
        <div className="absolute bottom-0 right-0 left-1/3 bg-red-400 h-full z-10"></div>
        <div className="absolute bottom-0 right-0 left-2/3 bg-red-900 h-full z-10"></div>
      </div>

      <div className="h-[50vh] w-full absolute bottom-0 z-10 grid grid-cols-3">
        <div className="absolute bottom-0 right-2/3 bg-black h-full z-[8]"></div>
        <div className="absolute bottom-0 right-0  bg-red-400 h-full z-10"></div>
        <div className="absolute bottom-0 right-0  bg-red-900 h-full z-10"></div>
      </div>
    </div>
  );
};

export default IntroOverlay;
