import { createSlice } from '@reduxjs/toolkit';

interface SearchState {
  searchHistory: string[];
}

const initialState: SearchState = {
  searchHistory: [],
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    addSearchHistory: (state, action) => {
      state.searchHistory = [action.payload, ...state.searchHistory];
    },
    clearSearchHistory: (state) => {
      state.searchHistory = [];
    },
  },
});

export const { addSearchHistory, clearSearchHistory } = searchSlice.actions;
export default searchSlice.reducer;

export const selectSearchHistory = (state: any) => state.search.searchHistory;
