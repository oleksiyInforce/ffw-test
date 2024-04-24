import React from 'react';

import { Container } from 'components/ui/Container/Container';
import { Share } from './Share/Share';
import { Paragraph } from 'components/ui/Text/Text';
import { useStep } from 'components/global/Provider/Provider';

import styles from './Completed.module.scss';

export const Completed = () => {
  const { setStep } = useStep();

  const handleReset = () => {
    setStep('video');
  };

  return (
    <Container>
      <div className={styles.container}>
        <h1 className={styles.title}>WELCOME ONBOARD !</h1>
        <h2 className={styles.sub}>You HAVE SUBSCRIBED</h2>
        <Share />
        <div className={styles.toHome}>
          <Paragraph>no thanks</Paragraph>
          <Paragraph link={'/'} onClick={handleReset}>
            back to homepage
          </Paragraph>
        </div>
      </div>
    </Container>
  );
};
