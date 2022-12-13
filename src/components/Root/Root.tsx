import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import LINKS from '../../constants/links';
import Header from '../Header/Header';
import Main from '../Main/Main';
import styles from './Root.module.scss';
import { Route, Routes } from 'react-router';
import ROUTES from '../../constants/routes';

const Root: React.FC = () => {
  return (
    <div className={styles.root}>
      <Sidebar links={LINKS} />
      <Header />
      <Main>
        <Routes>
          {ROUTES.map((route) => (
            <Route key={route.path} path={route.path} element={route.component} />
          ))}
        </Routes>
      </Main>
    </div>
  );
};

export default Root;
