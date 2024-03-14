import { configureStore } from '@reduxjs/toolkit';
import darkModeSlice from './DarkModeSlice';
import searchModeSlice from './SearchModeSlice';
import { flagsApiSlice } from './FlagsApiSlice';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    darkMode: darkModeSlice,
    filterRegion: searchModeSlice,
    [flagsApiSlice.reducerPath]: flagsApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(flagsApiSlice.middleware),
});

setupListeners(store.dispatch);
