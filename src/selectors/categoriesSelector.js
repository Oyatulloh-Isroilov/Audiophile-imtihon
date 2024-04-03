import { createSelector } from '@reduxjs/toolkit';

const selectCategoryReducer = state => state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  categoriesSlice => categoriesSlice.categories
);

export const selectIsLoading = createSelector(
  [selectCategoryReducer],
  categoriesSlice => categoriesSlice.isLoading
);
