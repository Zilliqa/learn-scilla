import React from 'react';
import { FaGithub, FaGitter, FaTwitter } from 'react-icons/fa';
import styles from './footer.module.css';
import zilliqaImg from '../../assets/images/zilliqa.png';
const copyright: string = 'Copyright © LearnScilla 2018';

const Footer: React.SFC = () => (
  <footer className={styles.footer}>
    <div className="text-center">
      <span className={styles.copyright}>{copyright}</span>
      <ul className="nav" style={{ justifyContent: 'center' }}>
        <li className="nav-item">
          <a
            className="text-secondary nav-link"
            href="https://zilliqa.com/"
            target="_blank"
            rel="noreferrer"
            aria-label={'Zilliqa Homepage'}
          >
            <img style={{ height: 16 }} src={zilliqaImg} alt="Zilliqa Logo" />
          </a>
        </li>
        <li className="nav-item">
          <a
            className="text-secondary nav-link"
            href="https://github.com/Zilliqa"
            target="_blank"
            rel="noreferrer"
            aria-label={'Zilliqa GitHub'}
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
            aria-label={'Zilliqa Gitter'}
          >
            <FaGitter />
          </a>
        </li>
        <li className="nav-item">
          <a
            className="text-secondary nav-link"
            href="https://twitter.com/zilliqa"
            target="_blank"
            rel="noreferrer"
            aria-label={'Zilliqa Twitter'}
          >
            <FaTwitter />
          </a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
