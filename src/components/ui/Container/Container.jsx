import React from 'react';

import styles from './Container.module.scss';

export const Container = ({ children, style, className }) => {
  return (
    <section className={`${styles.container} ${className}`} style={style}>
      {children}
    </section>
  );
};
