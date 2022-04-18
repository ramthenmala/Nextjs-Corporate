import type { NextPage } from 'next';
import Head from 'next/head';
import Banner from '../components/Banner';
import Cases from '../components/Cases';
import IntroOverlay from '../components/IntroOverlay';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect, useState } from 'react';

const handleAnimation = (onCompleteAnimation) => {
  // timeline
  const tl = gsap.timeline();
  tl.from(`.index-heading`, {
    duration: 1,
    opacity: 0,
    ease: 'power4.out',
    delay: 1,
    y: 100,
    skewY: 7,
    stagger: {
      amount: 0.3,
    },
  })
    .to('.overlay-top', {
      height: 0,
      duration: 1.6,
      ease: 'expo.inOut',
      stagger: 0.4,
    })
    .to('.overlay-bottom', {
      width: 0,
      duration: 1.6,
      delay: -0.8,
      ease: 'expo.inOut',
      stagger: {
        amount: 0.4,
      },
    })
    .to('.intro-overlay', {
      duration: 0,
      css: {
        display: 'none',
      },
    })
    .from('.case-image', {
      duration: 1.6,
      scale: 1.4,
      ease: 'expo.inOut',
      delay: -2,
      stagger: {
        amount: 0.4,
      },
      onComplete: onCompleteAnimation,
    });
};

function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

type screen = {
  height: number;
  width: number;
};
const Home: NextPage = () => {
  let screenSize: screen | undefined = undefined;
  if (typeof window !== 'undefined') {
    screenSize = {
      height: window.innerHeight,
      width: window.innerWidth,
    };
  }

  const [dimensions, dimensionsSet] = useState(screenSize);
  const [completeAnimation, completeAnimationSet] = useState(false);

  const onCompleteAnimation = () => {
    completeAnimationSet(true);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }
    gsap.to('body', { duration: 0, css: { visibility: 'visible' } });

    handleAnimation(onCompleteAnimation);

    const debounceFn = debounce(function handleResize() {
      dimensionsSet(screenSize);
    }, 1000);

    window.addEventListener('resize', debounceFn);

    return () => {
      window.removeEventListener('resize', debounceFn);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Next Animated Theme</title>
        <meta name="description" content="Created by Ram Kumar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="z-[2] relative main-page bg-white">
        {completeAnimation === false ? <IntroOverlay /> : null}
        <Banner />
        <Cases />
      </main>
    </>
  );
};

export default Home;
