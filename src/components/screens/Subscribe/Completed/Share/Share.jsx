import React from 'react';

import { Paragraph } from 'components/ui/Text/Text';
import { Icon } from 'components/ui/Icon/Icon';

import styles from './Share.module.scss';

export const Share = () => {
  return (
    <div className={styles.container}>
      <Paragraph weight='thin' size='big'>
        Spread the word
      </Paragraph>
      <div className={styles.socials}>
        <a href='https://discord.com'>
          <Icon name={'discord'} width={56} height={56} />
        </a>
        <div className={styles.divider} />
        <a href='https://x.com'>
          <Icon name={'x'} width={56} height={56} />
        </a>
      </div>
    </div>
  );
};
