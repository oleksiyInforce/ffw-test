import React from 'react';

import styles from './Hero.module.scss';

import { Container } from 'components/ui/Container/Container';
import { Icon } from 'components/ui/Icon/Icon';
import { Paragraph } from 'components/ui/Text/Text';
import { ScrollDown } from './ScrollDown';

export const Hero = () => {
  return (
    <Container className={styles.container}>
      <div className={styles.logoWrapper}>
        <Icon name={'lambo'} width={116} />
      </div>
      <h1 className={styles.title}>...NOW!</h1>
      <h2 className={styles.sub1}>be part of</h2>
      <h2 className={styles.sub2}>something big</h2>

      <Paragraph size='regular' className={styles.center}>
        Register and be the first to receive exclusive updates.
      </Paragraph>
      <ScrollDown />
    </Container>
  );
};
