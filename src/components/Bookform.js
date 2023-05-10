import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import styles from './styles/Bookapp.module.scss';
import { addBook, fetchBooks } from '../redux/books/booksSlice';

const Bookform = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({ title: '', author: '', category: '' });
  const [newBook, setNewBook] = useState(null);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleAddBook = () => {
    const book = {
      item_id: uuidv4(),
      title: formData.title,
      author: formData.author,
      category: formData.category,
    };

    dispatch(addBook(book));

    setFormData({ title: '', author: '', category: '' });
    setNewBook(book);
  };

  const appId = 'Z355zI6NW3NM3Yz4Nkx6';

  useEffect(() => {
    const postBook = async () => {
      if (newBook) {
        await axios.post(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}/books`, newBook);
        setNewBook(null);
      }
    };
    postBook();
  }, [newBook]);

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

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
        <input
          className={styles.bookAuthor}
          name="category"
          type="text"
          placeholder="category"
          value={formData.category}
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
