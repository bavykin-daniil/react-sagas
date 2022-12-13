import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import LINKS from '../../constants/links';
import Header from '../Header/Header';
import Main from '../Main/Main';
import styles from './Root.module.scss';

const Root: React.FC = () => {
  return (
    <div className={styles.root}>
      <Sidebar links={LINKS} />
      <Header />
      <Main />
    </div>
  );
};

export default Root;
