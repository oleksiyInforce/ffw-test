import React from 'react';

import styles from './Hero.module.scss';

import { Container } from 'components/ui/Container/Container';
import { Icon } from 'components/ui/Icon/Icon';
import { Divider } from 'components/ui/Divider/Divider';
import { Paragraph, Text } from 'components/ui/Text/Text';
import { ScrollDown } from './ScrollDown';

export const Hero = () => {
  return (
    <Container>
      <div className={styles.logoWrapper}>
        <Icon name={'lambo'} width={116} />
      </div>
      <h1 className={styles.title}>NOW!</h1>
      <Divider size={60} />
      <h2 className={styles.sub1}>be part of</h2>
      <Divider size={12} />
      <h2 className={styles.sub2}>something big</h2>
      <Divider size={36} />

      <Paragraph size='regular'>Subscribe for exclusive updates.</Paragraph>
      <Divider size={64} />

      <ScrollDown />
    </Container>
  );
};
