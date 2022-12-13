import React from 'react';
import Head from '../../components/Head/Head';
import styles from './Notes.module.scss';

const Notes: React.FC = () => {
  return (
    <div className={styles.notes}>
      <Head title={'Notes'} />
    </div>
  );
};

export default Notes;
