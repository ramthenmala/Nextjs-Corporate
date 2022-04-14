import Image from 'next/image';
import { IconNextArrow, IconPrevArrow } from './IconPack';

const caseStudies = [
  {
    id: 1,
    subtitle: 'Curology',
    title: 'A custom formula for your skin’s unique needs',
    img: 'curology-min',
  },
  {
    id: 2,
    subtitle: 'Yourspace',
    title: 'Open space floor plans for you next venture',
    img: 'yourspace-min',
  },
  {
    id: 3,
    subtitle: 'Lumin',
    title: 'For your best look ever',
    img: 'lumin-min',
  },
];

const Cases = () => {
  return (
    <section className="h-[50vh]">
      <div className="z-10 sm:visible absolute bottom-0 w-full sm:flex justify-between items-center box-border p-8">
        <div className="disabled w-4 h-4 sm:w-5 sm:h-5 lg:w-10 lg:h-10 border-2 rounded-full items-center flex justify-center bg-black/[0.6] border-black text-white cursor-pointer ">
          <IconPrevArrow />
        </div>
        <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-10 lg:h-10 border-2 rounded-full items-center flex justify-center bg-black/[0.6] border-black text-white cursor-pointer ">
          <IconNextArrow />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="grid sm:grid-cols-3 ">
          {caseStudies?.map((caseItem) => (
            <div
              className="relative h-[50vh] bg-black cursor-pointer group "
              key={caseItem.id}
            >
              <div className="absolute right-10 top-0 bottom-0 left-0 z-10 p-12">
                <div className="text-white mb-3">{caseItem.subtitle}</div>
                <h2 className="text-white text-xl lg:text-4xl">
                  {caseItem.title}
                </h2>
              </div>
              <div className="absolute top-0 right-0 bottom-0 left-0 opacity-60 group-hover:opacity-70 transition-all">
                <Image
                  src={`/assets/${caseItem.img}.png`}
                  alt={caseItem.title}
                  objectFit="cover"
                  layout="fill"
                  className="case-image"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
