import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchMode: '',
  searchTerm: '',
};

export const searchModeSlice = createSlice({
  name: 'searchMode',
  initialState,
  reducers: {
    filterRegion: (state, action) => {
      state.searchMode = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { filterRegion, setSearchTerm } = searchModeSlice.actions;
export default searchModeSlice.reducer;
