import React from 'react';
import Head from '../../components/Head/Head';
import styles from './Home.module.scss';

const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <Head title={'Todos'} />
    </div>
  );
};

export default Home;
