import React from 'react';
import styles from './styles/Bookapp.module.scss';

const Bookform = () => (
  <div className={styles.formContainer}>
    <h5>ADD NEW BOOK</h5>
    <form className={styles.form}>
      <input className={styles.bookTitle} type="text" placeholder="Book title" required />
      <input className={styles.bookAuthor} type="text" placeholder="Author" required />
      <button type="button" className={styles.bookButton}>Add Book</button>
    </form>
  </div>
);

export default Bookform;
