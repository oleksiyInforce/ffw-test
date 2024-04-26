import React, { useEffect, useRef, useState } from 'react';

import ReactPlayer from 'react-player/youtube';

import { Container } from 'components/ui/Container/Container';
import { useStep } from 'components/global/Provider/Provider';

import styles from './Video.module.scss';

export const Video = () => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const { setStep } = useStep();

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
        url={'https://youtu.be/LFvdDtP6pms'}
        playing={isVisible}
        muted={true}
        volume={0}
        width={'100%'}
        height={'100%'}
        onEnded={handleVideoEnd}
        className={styles.video}
        config={{
          youtube: {
            playerVars: {
              controls: 0,
              modestbranding: 0,
              showinfo: 1,
              fs: 0,
              cc_load_policy: 0,
              iv_load_policy: 3,
              autohide: 0,
            },
          },
        }}
      />
    </Container>
  );
};
