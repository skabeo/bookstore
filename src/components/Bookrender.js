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
          <div>
            <p>{books[key][0].category}</p>
            <h5>{books[key][0].title}</h5>
            <p>{books[key][0].author}</p>
            <button type="button">comments</button>
            <button type="button" onClick={() => handleremoveBook(key)}>remove</button>
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
              Chapter 9
            </p>
            <button type="button">UPDATE PROGRESS</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Bookrender;
