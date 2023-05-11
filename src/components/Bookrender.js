import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import styles from './styles/Bookapp.module.scss';
import { removeBook } from '../redux/books/booksSlice';

const Bookrender = () => {
  const books = useSelector((state) => state.book.book);

  const dispatch = useDispatch();

  const appId = 'Z355zI6NW3NM3Yz4Nkx6';

  const deleteBook = async (itemId) => {
    await axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}/books/${itemId}`);
  };

  const handleremoveBook = (itemId) => {
    dispatch(removeBook(itemId));
    deleteBook(itemId);
  };

  return (
    <div className={styles.mainBook}>
      {Object.keys(books).map((key) => (
        <div key={key} className={styles.bookContainer}>
          <div className={styles.bookList}>
            <p className={styles.category}>{books[key][0].category}</p>
            <h5 className={styles.title}>{books[key][0].title}</h5>
            <p className={styles.author}>{books[key][0].author}</p>
            <button type="button">comments</button>
            <span className={styles.vertical}>|</span>
            <button className={styles.paddLeft} type="button" onClick={() => handleremoveBook(key)}>remove</button>
            <span className={styles.vertical}>|</span>
            <button className={styles.paddLeft} type="button">edit</button>
          </div>
          <div className={styles.middleSec}>
            <AiOutlineLoading3Quarters className={styles.progress} />
            <div className={styles.completed}>
              <span className={styles.percent}>
                64%
              </span>
              <span className={styles.com}>
                completed
              </span>
            </div>
          </div>
          <div>
            <p className={styles.current}>CURRENT CHAPTER</p>
            <p className={styles.chapter}>
              Chapter 9
            </p>
            <button className={styles.progress2} type="button">UPDATE PROGRESS</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Bookrender;
