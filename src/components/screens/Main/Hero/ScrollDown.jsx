import React from 'react';

import Lottie from 'lottie-react';

import scrollAnimation from 'assets/lottie/scroll.json';
import { Paragraph } from 'components/ui/Text/Text';

export const ScrollDown = () => {
  const handleClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div onClick={handleClick} style={{ cursor: 'pointer' }}>
      <Lottie animationData={scrollAnimation} loop style={{ marginBottom: 12 }} />
      <Paragraph size='small'>Scroll for more</Paragraph>
    </div>
  );
};
