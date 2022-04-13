import Link from 'next/link';
import { IconArrow } from './IconPack';

const Banner = () => {
  return (
    <section className="h-[50vh] backdrop-blue-100 bg-white pt-[120px]">
      <div className="container mx-auto max-w-5xl ">
        <div className="flex flex-col ">
          <h2 className="text-2xl sm:text-4xl z-10 font-bold mix-blend-difference text-white">
            <div className="h-[56px] overflow-hidden relative">
              <span>Creating unique brands is</span>
            </div>
          </h2>
          <h2 className="text-2xl sm:text-4xl font-bold mix-blend-difference text-white">
            <div className="mb-2 h-[56px] overflow-hidden relative">
              <span className="absolute">what we do.</span>
            </div>
          </h2>
          <div className="relative w-[256px]">
            <Link href="/" passHref>
              <a className=" text-black space-x-4 flex items-center">
                <span className="font-bold tracking-wider">More about us</span>
                <span className="w-4 h-4 sm:w-5 sm:h-5 lg:w-10 lg:h-10 border-2 rounded-full items-center flex justify-center border-black hover:text-white hover:bg-black transition">
                  <IconArrow />
                </span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
