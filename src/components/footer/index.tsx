import React from 'react';
import { FaGithub, FaGitter, FaTelegramPlane } from 'react-icons/fa';
import styles from './footer.module.css';

const copyright: string = 'Copyright © LearnScilla 2018';

const Footer: React.SFC = () => (
  <footer className={styles.footer}>
    <div className="text-center">
      <span className={styles.copyright}>{copyright}</span>
      <ul className="nav" style={{ justifyContent: 'center' }}>
        <li className="nav-item">
          <a
            className="text-secondary nav-link"
            href="https://github.com/Zilliqa"
            target="_blank"
            rel="noreferrer"
            aria-label={'zilliqa github'}
          >
            <FaGithub />
          </a>
        </li>
        <li className="nav-item">
          <a
            className="text-secondary nav-link"
            href="https://gitter.im/Zilliqa"
            target="_blank"
            rel="noreferrer"
            aria-label={'zilliqa gitter'}
          >
            <FaGitter />
          </a>
        </li>
        <li className="nav-item">
          <a
            className="text-secondary nav-link"
            href="https://t.me/zilliqachat"
            target="_blank"
            rel="noreferrer"
            aria-label={'zilliqa telegram'}
          >
            <FaTelegramPlane />
          </a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
