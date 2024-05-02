import React from 'react';

import { Hero } from 'components/screens/Main/Hero/Hero';
import { Video } from 'components/screens/Main/Video/Video';

import { motion, AnimatePresence } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

export const Main = () => {
  return (
    <section>
      <Hero />
      <AnimatePresence initial={false}>
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
      </AnimatePresence>
    </section>
  );
};
