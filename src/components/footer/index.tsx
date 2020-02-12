import React from 'react';
import { FaGithub, FaTwitter, FaDiscord } from 'react-icons/fa';
import style from './style.module.css';
import zilliqaImg from '../../assets/images/zilliqa.png';
const copyright: string = 'Copyright © Zilliqa 2019';

const Footer: React.SFC = () => (
  <footer className={style.footer}>
    <div className="text-center">
      <span className={style.copyright}>{copyright}</span>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a
            className="text-secondary nav-link"
            href="https://zilliqa.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={'Zilliqa Homepage'}
          >
            <img className={style.zilliqa} src={zilliqaImg} alt="Zilliqa Logo" />
          </a>
        </li>
        <li className="nav-item">
          <a
            className="text-secondary nav-link"
            href="https://github.com/Zilliqa"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={'Zilliqa GitHub'}
          >
            <FaGithub />
          </a>
        </li>
        <li className="nav-item">
          <a
            className="text-secondary nav-link"
            href="https://discord.gg/mWp9HdR"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={'Zilliqa Discord'}
          >
            <FaDiscord />
          </a>
        </li>
        <li className="nav-item">
          <a
            className="text-secondary nav-link"
            href="https://twitter.com/zilliqa"
            target="_blank"
            rel="noopener noreferrer"
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
