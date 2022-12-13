import React from 'react';
import styles from './Head.module.scss';

type PropsT = {
  title: string;
};

const Head: React.FC<PropsT> = ({ title }) => {
  return (
    <div className={styles.head}>
      <div className="container">
        <h2 className={styles.title}>{title}</h2>
      </div>
    </div>
  );
};

export default Head;
