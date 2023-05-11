import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  book: {},
  isLoading: false,
  error: '',
};

const appId = 'Z355zI6NW3NM3Yz4Nkx6';

export const fetchBooks = createAsyncThunk('book/fetchBooks', async () => {
  try {
    const response = await axios.get(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}/books`);
    return response.data;
  } catch (error) {
    return error;
  }
});

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const {
        title, author, category,
      } = action.payload;
      const itemId = action.payload.item_id;
      const newItem = {
        title,
        author,
        category,
      };
      return {
        ...state,
        book: {
          ...state.book,
          [itemId]: [...(state.book[itemId] || []), newItem],
        },
      };
    },
    removeBook: (state, action) => {
      const itemId = action.payload;
      const { [itemId]: removedBook, ...restOfBooks } = state.book;
      state.book = restOfBooks;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.book = action.payload;
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const { addBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
