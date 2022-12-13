import React from 'react';
import cn from 'classnames';
import { LinkT } from '../../types/constants/links';
import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.scss';

type PropsT = {
  links: LinkT[];
};

const Sidebar: React.FC<PropsT> = ({ links }) => {
  return (
    <nav className={styles.sidebar}>
      <ul className={styles.links}>
        {links.map((link: LinkT) => (
          <li className={styles.linkContainer} key={link.name}>
            <NavLink
              className={({ isActive }) =>
                isActive ? cn(styles.link, { [styles.active]: isActive }) : styles.link
              }
              to={link.path}
            >
              <div className={styles.linkIconContainer}>{link.icon}</div>

              <span className={styles.linkName}>{link.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
