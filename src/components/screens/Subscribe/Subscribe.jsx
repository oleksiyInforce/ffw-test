import React, { useState } from 'react';

import { Completed } from './Completed/Completed';
import { Join } from './Join/Join';

import { AnimatePresence, motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const Subscribe = () => {
  const [step, setStep] = useState('form');

  return (
    <section>
      <AnimatePresence>
        {step === 'form' ? (
          <motion.div
            variants={variants}
            initial='hidden'
            animate='visible'
            exit='hidden'
            key='form'
            transition={{ duration: 0.4 }}
          >
            <Join setStep={setStep} />
          </motion.div>
        ) : (
          <motion.div
            variants={variants}
            initial='hidden'
            animate='visible'
            exit='hidden'
            key='form-end'
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            <Completed />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
