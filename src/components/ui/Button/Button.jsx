import React from 'react';

import styles from './Button.module.scss';

import { Link } from 'react-router-dom';

export const Button = ({ children, variant = 'primary', href, onClick, type, mw, loading }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return href ? (
    <Link
      to={href}
      className={`${styles.button} ${styles[variant]}`}
      style={mw && { minWidth: mw }}
    >
      {children}
    </Link>
  ) : (
    <button
      className={`${styles.button} ${styles[variant]}`}
      onClick={handleClick}
      type={type}
      style={mw && { minWidth: mw }}
      {...(loading && { disabled: true })}
    >
      {children}
    </button>
  );
};
