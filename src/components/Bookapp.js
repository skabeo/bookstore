import React from 'react';
import { useSelector } from 'react-redux';
import Bookslogic from './Bookslogic';
import Bookform from './Bookform';

const Bookapp = () => {
  const books = useSelector((state) => state.book);

  return (
    <div>
      {books.isLoading && <div>Loading...</div>}
      {!books.isLoading && books.error ? (
        <div>
          Error:
          {books.error}
        </div>
      ) : null}
      <Bookslogic />
      <Bookform />
    </div>
  );
};

export default Bookapp;
