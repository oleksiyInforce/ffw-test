import React from 'react';

import styles from './Input.module.scss';

export const Input = React.forwardRef(({ name, placeholder, onChange, error }, ref) => {
  console.log(error);

  return (
    <div className={styles.wrapper}>
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
