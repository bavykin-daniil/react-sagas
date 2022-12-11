import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import LINKS from '../../constants/links';

const Root: React.FC = () => {
  return (
    <div>
      <Sidebar links={LINKS} />
    </div>
  );
};

export default Root;
