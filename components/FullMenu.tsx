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
    <nav className="fixed top-0 left-0 overflow-hidden z-10 w-full h-full bg-[#fff3d8]">
      <div className="container mx-auto max-w-5xl">
        <div className="py-4 grid grid-cols-1 md:grid-cols-2 md:py-10">
          <div>
            <h3 className="text-xl mb-6">Menu</h3>
            {routes?.map((item) => (
              <Link href={item.path} key={item.label} passHref>
                <a className="flex py-4 text-4xl font-medium">{item.label}</a>
              </Link>
            ))}
          </div>

          <div className="">
            <h3 className="text-xl mb-6">Contact</h3>
            <div className="flex justify-between">
              <div className="flex flex-col ">
                <div className="flex flex-col mb-6">
                  <h4 className="font-normal text-2xl mb-2">Email</h4>
                  <Link href="/" passHref>
                    <a className="font-extralight text-xl mb-2">
                      demo@gmail.com
                    </a>
                  </Link>
                  <Link href="/getintouch" passHref>
                    <a className="font-extralight text-xl mb-2">Get In Touch</a>
                  </Link>
                  <Link href="/audit" passHref>
                    <a className="font-extralight text-xl mb-2">
                      Get a free audit
                    </a>
                  </Link>
                </div>
                <div className="flex flex-col ">
                  <h4 className="font-normal text-2xl mb-2">Phone</h4>
                  <Link href="tel:+13115552368" key="audit" passHref>
                    <a className="font-extralight text-xl mb-2">
                      (311) 555-2368
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
                    <a className="font-extralight text-xl mb-2">
                      Privacy and Cookies
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
