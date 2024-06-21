import { createSlice, PayloadAction, createDraftSafeSelector } from '@reduxjs/toolkit';
import { RootState } from 'redux/hooks';

const initialState = {
  loadingComponentsMap: {} as Record<string, boolean>,
};

const sliceName = 'loader';
const loaderSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    setIsLoaderDisplayed(state, action: PayloadAction<{ componentId: string; isLoading: boolean }>) {
      const { componentId, isLoading } = action.payload;
      const loadingComponentsMap = { ...state.loadingComponentsMap };
      if (isLoading) {
        loadingComponentsMap[componentId] = true;
      } else {
        delete loadingComponentsMap[componentId];
      }
      state.loadingComponentsMap = loadingComponentsMap;
    },
  },
});

const selectIsLoaderDisplayed = createDraftSafeSelector(
  (state: RootState) => state,
  state => Object.keys(state[sliceName].loadingComponentsMap).length > 0,
);

export const { setIsLoaderDisplayed } = loaderSlice.actions;
export { selectIsLoaderDisplayed };
export default loaderSlice;
