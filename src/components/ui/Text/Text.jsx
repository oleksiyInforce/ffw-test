import React from 'react';

import styles from './Text.module.scss';
import { Link } from 'react-router-dom';

export const Paragraph = ({
  weight = 'thin',
  size = 'normal',
  color = 'white',
  link,
  children,
  className,
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return !link ? (
    <p
      className={`${styles[weight]} ${styles[size]} ${styles[color]} ${className}`}
      onClick={handleClick}
    >
      {children}
    </p>
  ) : (
    <Link
      to={link}
      className={`${styles[weight]} ${styles[size]} ${styles[color]} ${styles.link} ${className}`}
      style={{
        cursor: 'pointer',
      }}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
};
