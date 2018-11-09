import React from 'react';
import styles from './footer.module.css';

const copyright: string = 'Copyright © LearnScilla 2018';

const Footer: React.SFC<{}> = () => (
  <footer className={styles.footer}>
    <span className={styles.copyright}>{copyright}</span>
  </footer>
);

export default Footer;
