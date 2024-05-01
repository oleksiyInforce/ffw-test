import React from 'react';

import Lottie from 'lottie-react';

import scrollAnimation from 'assets/lottie/scroll.json';
import { Paragraph } from 'components/ui/Text/Text';
import { useStep } from 'components/global/Provider/Provider';

import styles from './ScrollDown.module.scss';

export const ScrollDown = () => {
  const { setIsMuted } = useStep();

  const handleClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
    setIsMuted(false);
  };

  const isMobile = window.innerWidth < 572;

  return (
    <div onClick={handleClick} style={{ cursor: 'pointer' }} className={styles.wrapper}>
      <Lottie
        animationData={scrollAnimation}
        loop
        style={{
          width: isMobile ? 80 : undefined,
          height: isMobile ? 80 : undefined,
          marginBottom: isMobile ? 8 : 12,
        }}
      />
      <Paragraph size='small'>Click to discover more</Paragraph>
    </div>
  );
};
