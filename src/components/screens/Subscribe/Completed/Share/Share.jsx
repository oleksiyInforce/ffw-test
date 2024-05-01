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
        <a href='https://discord.com/invite/vet6ZBjpFd' target='_blank'>
          <Icon name={'discord'} width={56} height={56} className={styles.link} />
        </a>
        <div className={styles.divider} />
        <a
          href='https://twitter.com/intent/tweet?text=Something%20BIG%20is%20coming%20to%20%40Lamborghini&url=wen.lamborghini.com'
          target='_blank'
        >
          <Icon name={'x'} width={56} height={56} className={styles.link} />
        </a>
      </div>
    </div>
  );
};
