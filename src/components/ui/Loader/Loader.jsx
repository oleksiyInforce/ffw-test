import React from 'react';

import styles from './Loader.module.scss';

export const Loader = ({ color }) => {
  return <div className={styles.loader} style={{ background: color }} />;
};
