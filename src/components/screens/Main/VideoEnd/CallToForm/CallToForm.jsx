import { Button } from 'components/ui/Button/Button';
import React from 'react';

import styles from './CallToForm.module.scss';
  
export const CallToForm = () => {
  return (
    <section className={styles.wrapper}>
      <Button href={'/subscribe'}>Subscribe</Button>
    </section>
  );
};
