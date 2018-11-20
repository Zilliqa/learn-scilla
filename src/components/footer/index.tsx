import React from 'react';
import styles from './footer.module.css';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { FaGithub, FaGitter, FaTelegramPlane } from 'react-icons/fa';
const copyright: string = 'Copyright © LearnScilla 2018';

const Footer: React.SFC<{}> = () => (
  <footer className={styles.footer}>
    <div className="text-center">
      <span className={styles.copyright}>{copyright}</span>
      <Nav style={{ justifyContent: 'center' }}>
        <NavItem>
          <NavLink href="https://github.com/Zilliqa" target="_blank">
            <FaGithub />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://gitter.im/Zilliqa" target="_blank">
            <FaGitter />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://t.me/zilliqachat" target="_blank">
            <FaTelegramPlane />
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  </footer>
);

export default Footer;
