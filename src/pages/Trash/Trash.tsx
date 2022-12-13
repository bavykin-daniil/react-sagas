import React from 'react';
import Head from '../../components/Head/Head';
import styles from './Trash.module.scss';

const Trash: React.FC = () => {
  return (
    <div className={styles.trash}>
      <Head title={'Trash'} />
    </div>
  );
};

export default Trash;
