import React from 'react';

import { Form } from './Form/Form';
import { Container } from 'components/ui/Container/Container';

import styles from './Join.module.scss';

export const Join = ({ setStep }) => {
  return (
    <Container>
      <p className={styles.text}>
        <span>Join the waiting list</span> and stay connected as we fuel up <br /> and build
        something extraordinary.
      </p>

      <p className={styles.title}>Don't shift gears just yet!</p>
      <Form setStep={setStep} />
    </Container>
  );
};
