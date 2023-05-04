import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import PropTypes from 'prop-types';
import styles from './styles/Bookapp.module.scss';

const Bookrender = ({ bookProps }) => (
  <div className={styles.mainBook}>
    {bookProps.map((book) => (
      <div key={book.id} className={styles.bookContainer}>
        <div>
          <h5>{book.title}</h5>
          <p>{book.author}</p>
          <button type="button">comments</button>
          <button type="button">remove</button>
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

Bookrender.propTypes = {
  bookProps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      chapter: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Bookrender;
