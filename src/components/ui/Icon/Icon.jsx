import { ICONS } from 'constants/icons';
import React from 'react';

import styles from './Icon.module.scss';

export const Icon = ({ name, width, height, className, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <img
      alt={name}
      src={ICONS[name]}
      style={{
        width: width ? width : 'auto',
        height: height ? height : 'auto',
        cursor: onClick ? 'pointer' : 'default',
      }}
      onClick={handleClick}
      className={styles.image + ' ' + className}
    />
  );
};
