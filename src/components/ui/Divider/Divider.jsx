import React from 'react';

export const Divider = ({ type = 'horizontal', size }) => {
  return (
    <div
      style={{
        width: type === 'horizontal' ? '100%' : size,
        height: type === 'horizontal' ? size : '100%',
      }}
    />
  );
};
