import React from 'react';

const IntroOverlay = () => {
  return (
    <div className="intro-overlay z-20">
      <div className="h-[50vh] w-full absolute grid grid-cols-3 ">
        <div className="absolute bottom-0 right-0 left-0 bg-black h-full overlay-top"></div>
        <div className="invisible sm:visible absolute bottom-0 right-0 left-1/3 bg-black h-full overlay-top"></div>
        <div className="invisible sm:visible absolute bottom-0 right-0 left-2/3 bg-black h-full overlay-top"></div>
      </div>

      <div className="h-[50vh] w-full absolute grid grid-cols-3 bottom-0">
        <div className="absolute bottom-0 right-0 left-0 bg-black h-full z-20 overlay-bottom"></div>
        <div className="invisible sm:visible absolute bottom-0 right-0 left-1/3 bg-black h-full z-20 overlay-bottom"></div>
        <div className="invisible sm:visible absolute bottom-0 right-0 left-2/3 bg-black h-full z-20 overlay-bottom"></div>
      </div>
    </div>
  );
};

export default IntroOverlay;
