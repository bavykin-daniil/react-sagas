import React from 'react';
import styles from './Main.module.scss';

type PropsT = {
  children?: React.ReactNode;
};

const Main: React.FC<PropsT> = ({ children }) => {
  return <main className={styles.main}>{children ? children : null}</main>;
};

export default Main;
