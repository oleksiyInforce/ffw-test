import React from 'react';

import styles from './Input.module.scss';

export const Input = React.forwardRef(({ name, placeholder, onChange, error }, ref) => {
  return (
    <div className={`${styles.wrapper} ${error && styles.wrapperError}`}>
      <input
        className={`${styles.input} ${error && styles.error}`}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        ref={ref}
      />
      {error && <p className={styles.errorText}>{error.message}</p>}
    </div>
  );
});
