import React from 'react';

import styles from './Checkbox.module.scss';

export const Checkbox = React.forwardRef(
  ({ children, checked, onChange, error, name, value }, ref) => {
    return (
      <div className={styles.wrapper}>
        <input
          type='checkbox'
          className={error && styles.error}
          name={name}
          checked={checked}
          onChange={onChange}
          value={value}
          ref={ref}
        />
        <div className={styles.label}>{children}</div>
      </div>
    );
  },
);
