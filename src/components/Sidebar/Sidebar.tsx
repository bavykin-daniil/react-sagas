import React from 'react';
import styles from './Sidebar.module.scss';
import { LinkT } from '../../types/constants/links';

type PropsT = {
  links: LinkT[];
};

const Sidebar: React.FC<PropsT> = ({ links }) => {
  return (
    <nav className={styles.sidebar}>
      <ul className={styles.links}>
        {links.map((link: LinkT) => (
          <li className={styles.linkContainer} key={link.name}>
            <div className={styles.linkIconContainer}>{link.icon}</div>

            <span className={styles.linkName}>{link.name}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
