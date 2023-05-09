import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles/Bookapp.module.scss';
import { removeBook } from '../redux/books/booksSlice';

const Bookrender = () => {
  const books = useSelector((state) => state.book.book);

  const dispatch = useDispatch();

  const handleremoveBook = (itemId) => {
    dispatch(removeBook(itemId));
  };
  return (
    <div className={styles.mainBook}>
      {books.map((book) => (
        <div key={book.item_id} className={styles.bookContainer}>
          <div>
            <h5>{book.title}</h5>
            <p>{book.author}</p>
            <button type="button">comments</button>
            <button type="button" onClick={() => handleremoveBook(book.item_id)}>remove</button>
            <button type="button">edit</button>
          </div>
          <div className={styles.middleSec}>
            <AiOutlineLoading3Quarters />
            <div className={styles.completed}>
              <span>
                64%
              </span>
              <span>
                completed
              </span>
            </div>
          </div>
          <div>
            <p>CURRENT CHAPTER</p>
            <p>
              Chapter
              {book.chapter}
            </p>
            <button type="button">UPDATE PROGRESS</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Bookrender;
