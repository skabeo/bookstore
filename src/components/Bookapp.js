import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Bookslogic from './Bookslogic';
import styles from './styles/Bookapp.module.scss';
import { fetchBooks } from '../redux/books/booksSlice';
import Bookform from './Bookform';

const Bookapp = () => {
  const books = useSelector((state) => state.book);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const { isLoading } = books;
  const hasError = !books.isLoading && books.error;
  const hasBooks = Object.keys(books.book).length > 0;
  const shouldShowNoBooks = Object.keys(books.book).length === 0 && !books.isLoading;

  return (
    <div>
      {isLoading && <div className={styles.loading} />}
      {hasError && (
        <div>
          Error:
          {books.error}
        </div>
      )}
      {hasBooks && <Bookslogic />}
      {shouldShowNoBooks && (
        <div>
          <h3 style={{ textAlign: 'center', paddingTop: '70px' }}>No books added</h3>
          <Bookform />
        </div>
      )}
    </div>
  );
};

export default Bookapp;
