import React from 'react';

import styles from './Footer.module.scss';
import { Paragraph } from 'components/ui/Text/Text';

export const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <Paragraph>Copyright © 2024 Automobili Lamborghini S.p.A</Paragraph>
      <div className={styles.right}>
        <Paragraph
          link={
            'https://www.figma.com/file/UjPgtaxILCmJLIFGCDCxPV/Fastforworld_v1?node-id=3%3A14842&mode=dev'
          }
        >
          Terms and Conditions
        </Paragraph>
        <Paragraph
          link={
            'https://www.figma.com/file/UjPgtaxILCmJLIFGCDCxPV/Fastforworld_v1?node-id=3%3A14842&mode=dev'
          }
        >
          Privacy Policy
        </Paragraph>
      </div>
    </footer>
  );
};
