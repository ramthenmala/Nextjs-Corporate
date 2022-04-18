import { getRoutingItems } from 'next/dist/shared/lib/router/utils';
import Link from 'next/link';

const FullMenu = () => {
  const routes = [
    {
      path: '/',
      label: 'Home',
    },
    {
      path: '/about',
      label: 'About',
    },
    {
      path: '/casestudies',
      label: 'Case Studies',
    },
    {
      path: '/approach',
      label: 'Approach',
    },
  ];
  return (
    <nav className="fixed top-0 left-0 overflow-auto z-1 w-full h-full bg-[#fff3d8] translate-y-0 fullMenu">
      <div className="container mx-auto max-w-5xl">
        <div className="pt-20 pb-20 px-2 grid grid-cols-1 md:grid-cols-2 md:pt-20">
          <div className="flex flex-col ">
            <h3 className="text-xl mb-6">Menu</h3>
            {routes?.map((item) => (
              <Link href={item.path} key={item.label} passHref>
                <a>
                  <span className="inline-flex py-4 text-4xl font-medium mb-2 relative after:content-[''] after:w-[0] after:absolute after:bottom-0 after:h-[2px] after:mt-2 after:right-0 after:bg-black after:transition-all hover:after:w-full  hover:after:left-0 hover:after:bg-black">
                    {item.label}
                  </span>
                </a>
              </Link>
            ))}
          </div>

          <div className="">
            <h3 className="text-xl mb-6">Contact</h3>
            <div className="flex justify-between grid grid-cols-1 md:grid-cols-2">
              <div className="flex flex-col">
                <div className="flex flex-col mb-6">
                  <h4 className="font-normal text-2xl mb-2">Email</h4>
                  <Link href="/" passHref>
                    <a className="mb-2">
                      <span className="py-1 font-extralight text-xl relative after:content-[''] after:w-[0] after:absolute after:bottom-0 after:h-[2px] after:mt-2 after:right-0 after:bg-black after:transition-all hover:after:w-full  hover:after:left-0 hover:after:bg-black">
                        demo@gmail.com
                      </span>
                    </a>
                  </Link>
                  <Link href="/getintouch" passHref>
                    <a className="mb-2">
                      <span className="py-1 font-extralight text-xl relative after:content-[''] after:w-[0] after:absolute after:bottom-0 after:h-[2px] after:mt-2 after:right-0 after:bg-black after:transition-all hover:after:w-full  hover:after:left-0 hover:after:bg-black">
                        Get In Touch
                      </span>
                    </a>
                  </Link>
                  <Link href="/audit" passHref>
                    <a className="mb-2">
                      <span className="py-1 font-extralight text-xl relative after:content-[''] after:w-[0] after:absolute after:bottom-0 after:h-[2px] after:mt-2 after:right-0 after:bg-black after:transition-all hover:after:w-full  hover:after:left-0 hover:after:bg-black">
                        Get a free audit
                      </span>
                    </a>
                  </Link>
                </div>
                <div className="flex flex-col ">
                  <h4 className="font-normal text-2xl mb-2">Phone</h4>
                  <Link href="tel:+13115552368" key="audit" passHref>
                    <a className="mb-2">
                      <span className="py-1 font-extralight text-xl relative after:content-[''] after:w-[0] after:absolute after:bottom-0 after:h-[2px] after:mt-2 after:right-0 after:bg-black after:transition-all hover:after:w-full  hover:after:left-0 hover:after:bg-black">
                        (311) 555-2368
                      </span>
                    </a>
                  </Link>
                </div>
              </div>

              <div className="flex flex-col ">
                <div className="flex flex-col mb-6">
                  <h4 className="font-normal text-2xl mb-2">Headquarters</h4>
                  <address className="not-italic font-extralight text-xl mb-2">
                    Mozilla Foundation
                    <br />
                    331 E Evelyn Ave
                    <br />
                    Mountain View, CA 94041,USA
                  </address>
                </div>
                <div className="flex flex-col ">
                  <h4 className="font-normal text-2xl mb-2">Legal</h4>
                  <Link href="/privacy" key="audit" passHref>
                    <a className="mb-2">
                      <span className="py-1 font-extralight text-xl relative after:content-[''] after:w-[0] after:absolute after:bottom-0 after:h-[2px] after:mt-2 after:right-0 after:bg-black after:transition-all hover:after:w-full  hover:after:left-0 hover:after:bg-black">
                        Privacy and Cookies
                      </span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default FullMenu;
