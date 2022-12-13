import React from 'react';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <h1 className={styles.title}>Awesome notes</h1>
      </div>
    </header>
  );
};

export default Header;
