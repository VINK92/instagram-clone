import { configureStore } from '@reduxjs/toolkit';
// import { mainApi } from 'redux/api/main-api';
// import bannerSlice from 'redux/banner';
// import loaderSlice from 'redux/loader';

export const store = configureStore({
  reducer: {
    // [mainApi.reducerPath]: mainApi.reducer,
    // [bannerSlice.name]: bannerSlice.reducer,
    // [loaderSlice.name]: loaderSlice.reducer,
  },
  // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(mainApi.middleware),
});
