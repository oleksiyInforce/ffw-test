import React from 'react';

import bg from 'assets/icons/pattern.svg';
import styles from './Background.module.scss';

export const Background = () => {
  return <img className={styles.bg} src={bg} alt='bg' />;
};
