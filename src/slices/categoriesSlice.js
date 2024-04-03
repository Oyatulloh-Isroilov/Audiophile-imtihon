import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCategoriesAndDocuments } from '../utils/firebase.utils';

export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
  const categoriesArray = await getCategoriesAndDocuments('categories');
  return categoriesArray;
});

export const CATEGORIES_INITIAL_STATE = {
  categories: [],
  isLoading: false,
  error: null,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: CATEGORIES_INITIAL_STATE,
  extraReducers: builder => {
    builder
      .addCase(fetchCategories.pending, (state, action) => {
        return { ...state, isLoading: true };
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        return { ...state, categories: action.payload, isLoading: false };
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        return { ...state, error: action.payload, isLoading: true };
      });
  },
});

export const { setCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
