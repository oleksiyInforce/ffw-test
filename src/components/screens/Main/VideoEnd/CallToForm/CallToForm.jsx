import { Button } from 'components/ui/Button/Button';
import React from 'react';

import styles from './CallToForm.module.scss';
import { Icon } from 'components/ui/Icon/Icon';
import { Paragraph } from 'components/ui/Text/Text';

export const CallToForm = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.qr}>
        <Paragraph weight='mid'>
          Scan the QR code <br /> to subscribe
        </Paragraph>
        <Icon name='qr' width={155} height={155} />
      </div>
      <div className={styles.divider}>or click the button</div>
      <Button href={'/subscribe'}>Subscribe</Button>
    </section>
  );
};
