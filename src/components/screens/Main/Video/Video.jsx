import React, { useEffect, useRef, useState } from 'react';

import ReactPlayer from 'react-player';

import { Container } from 'components/ui/Container/Container';
import { useStep } from 'components/global/Provider/Provider';

import styles from './Video.module.scss';

const videoUrl = new URL('/public/REVUELTO_teaser02.mp4', import.meta.url).href;

export const Video = () => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const { setStep, isMuted } = useStep();

  useEffect(() => {
    const onScroll = () => {
      const rect = ref.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        window.removeEventListener('scroll', onScroll);
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const handleVideoEnd = () => {
    setStep('form');
  };

  return (
    <Container className={styles.container}>
      <div ref={ref} />
      <ReactPlayer
        url={videoUrl}
        playing={isVisible}
        muted={isMuted}
        playsinline
        volume={1}
        width={'100%'}
        height={'100%'}
        onEnded={handleVideoEnd}
        className={styles.video}
      />
    </Container>
  );
};
