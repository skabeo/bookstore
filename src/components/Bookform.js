import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import styles from './styles/Bookapp.module.scss';
import { addBook } from '../redux/books/booksSlice';

const Bookform = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({ title: '', author: '' });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleAddBook = () => {
    const newBook = {
      id: uuidv4(),
      title: formData.title,
      author: formData.author,
    };

    dispatch(addBook(newBook));

    setFormData({ title: '', author: '' });
  };

  return (
    <div className={styles.formContainer}>
      <h5>ADD NEW BOOK</h5>
      <form className={styles.form}>
        <input
          className={styles.bookTitle}
          name="title"
          type="text"
          placeholder="Book title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <input
          className={styles.bookAuthor}
          name="author"
          type="text"
          placeholder="Author"
          value={formData.author}
          onChange={handleChange}
          required
        />
        <button
          type="button"
          className={styles.bookButton}
          onClick={handleAddBook}
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default Bookform;
