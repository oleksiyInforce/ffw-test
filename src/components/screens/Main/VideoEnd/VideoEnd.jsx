import { Container } from 'components/ui/Container/Container';
import React from 'react';

import styles from './VideoEnd.module.scss';
import { CallToForm } from './CallToForm/CallToForm';

export const VideoEnd = () => {
  return (
    <Container style={{ gap: 48 }}>
      <h3 className={styles.title}>Don't you want to know?</h3>
      <p className={styles.text}>
        <span>Join the waiting list</span> and stay connected as we fuel up <br /> and build
        something extraordinary.
      </p>

      <CallToForm />
    </Container>
  );
};
