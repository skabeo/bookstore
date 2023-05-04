import React, { useState } from 'react';
import Bookrender from './Bookrender';

const Bookslogic = () => {
  const [books] = useState([
    {
      id: 1,
      title: 'The Hunger Game',
      author: 'Suzanne Collins',
      chapter: 17,
    },
    {
      id: 2,
      title: 'Dune',
      author: 'Frank herbert',
      chapter: 3,
    },
    {
      id: 3,
      title: 'Capital',
      author: 'Spencer',
      chapter: 3,
    },
  ]);

  return (
    <div>
      <Bookrender bookProps={books} />
    </div>
  );
};

export default Bookslogic;
