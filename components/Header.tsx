import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IconUpArrowCircle } from './IconPack';
import { gsap } from 'gsap';
import { useRouter } from 'next/router';
let tl = gsap.timeline();

const Header = () => {
  const router = useRouter();
  const [menuState, menuStateSet] = useState({
    menuOpened: false,
  });

  useEffect(() => {
    if (menuState.menuOpened === true) {
      gsap.to('.fullMenu', {
        delay: 0,
        css: {
          display: 'block',
        },
      });

      tl.to('.main-page', {
        duration: 1,
        y: '70vh',
        ease: 'ease.inOut',
      })
        .to('.hamburger-menu', {
          duration: 0.6,
          delay: -1,
          ease: 'ease.inOut',
          scale: 0,
          transformOrigin: '50% 0',
        })
        .to('#Path_1', {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 5,
          },
        })
        .to('#Path_2', {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 20,
            strokeDasharray: 5,
          },
        })
        .to('#Line_1', {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 40,
            strokeDasharray: 18,
          },
        })
        .to('#circle', {
          duration: 0.6,
          delay: -0.8,
          css: {
            strokeDashoffset: 0,
          },
        })
        .to('.hamburger-close', {
          duration: 0.6,
          delay: -0.8,
          css: {
            display: 'block',
          },
        });
    } else {
      tl.to('.main-page', {
        duration: 1,
        y: '0',
        ease: 'ease.inOut',
      })
        .to('#circle', {
          duration: 0.6,
          delay: -0.6,
          css: {
            strokeDashoffset: -193,
            strokeDasharray: 227,
          },
        })
        .to('#Path_1', {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 10,
          },
        })
        .to('#Path_2', {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 10,
          },
        })
        .to('#Line_1', {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 40,
            strokeDasharray: 40,
          },
        })
        .to('.hamburger-menu', {
          duration: 0.6,
          delay: -0.6,
          ease: 'ease.inOut',
          scale: 1,
          transformOrigin: '50% 0',
        })
        .to('.hamburger-close', {
          css: {
            display: 'none',
          },
        })
        .to('.hamburger-menu', {
          css: {
            display: 'block',
          },
        });
    }

    router.events.on('routeChangeComplete', () => {
      menuStateSet({
        menuOpened: false,
      });
      console.log('logging change', menuState.menuOpened);
    });
    return () => {
      router.events.off('routeChangeComplete', () => {
        console.log('logging Finished');
      });
    };
  }, [menuState.menuOpened]);
  return (
    <header className="z-10 py-6 px-2 box-content flex justify-between items-center container mx-auto max-w-5xl fixed top-0 left-0 right-0 h-10">
      <Link href="/" passHref>
        <a className="font-bold tracking-widest text-2xl">AGENCY</a>
      </Link>

      <div className="flex relative justify-center items-center cursor-pointer">
        <div
          className="w-5 h-5 hamburger-menu"
          onClick={() => menuStateSet({ menuOpened: true })}
        >
          <span className="w-5 h-[3px] mb-1 bg-black block"></span>
          <span className="w-5 h-[3px] mb-1 bg-black block"></span>
        </div>
        <div
          className="absolute hamburger-close"
          style={{ display: 'none' }}
          onClick={() => menuStateSet({ menuOpened: false })}
        >
          <IconUpArrowCircle />
        </div>
      </div>
    </header>
  );
};

export default Header;
