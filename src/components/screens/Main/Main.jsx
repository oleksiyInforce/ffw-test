import React from 'react';

import { Hero } from 'components/screens/Main/Hero/Hero';
import { Video } from 'components/screens/Main/Video/Video';
import { useStep } from 'components/global/Provider/Provider';

import { motion, AnimatePresence } from 'framer-motion';
import { VideoEnd } from './VideoEnd/VideoEnd';

const variants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

export const Main = () => {
  const { step } = useStep();

  return (
    <section>
      <Hero />
      <AnimatePresence initial={false}>
        {step === 'video' ? (
          <motion.div
            variants={variants}
            initial='hidden'
            animate='visible'
            exit='hidden'
            key='video'
            transition={{ duration: 0.4 }}
          >
            <Video />
          </motion.div>
        ) : (
          <motion.div
            variants={variants}
            initial='hidden'
            animate='visible'
            exit='hidden'
            key='video-end'
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            <VideoEnd />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
