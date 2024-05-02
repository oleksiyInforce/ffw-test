import React, { useEffect, useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';

import { Icon } from 'components/ui/Icon/Icon';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import styles from './Header.module.scss';

const variants = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0 },
};

export const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (pathname === '/subscribe') {
      return;
    }

    window.addEventListener('scroll', () => {
      setIsVisible(window.scrollY > 500);
    });

    return () => {
      window.removeEventListener('scroll', () => {
        setIsVisible(window.scrollY > 500);
      });
    };
  }, [pathname]);

  const handleClose = () => {
    navigate('/subscribe');
  };

  return pathname === '/subscribe' ? (
    <header className={`${styles.wrapper} ${styles.subscribe}`}>
      <Link to={'/'}>
        <Icon name='logo' width={64} className={styles.logo} />
      </Link>
    </header>
  ) : (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          variants={variants}
          initial='hidden'
          exit='hidden'
          animate='visible'
          className={styles.wrapper}
          transition={{ ease: 'circInOut' }}
        >
          <Link to={'/'}>
            <Icon name='logo' width={64} className={styles.logo} />
          </Link>
          <AnimatePresence>
            <motion.div
              variants={variants}
              initial='visible'
              exit='hidden'
              transition={{ ease: 'circInOut', duration: 0.2 }}
              className={styles.close}
            >
              <Icon name='close' width={48} height={48} onClick={handleClose} />
            </motion.div>
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  );
};
