import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '.';

type State = {
  count: number;
};

const initialState: State = {
  count: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementCount: (state) => {
      state.count += 1;
    },
    decrementCount: (state) => {
      state.count -= 1;
    },
    incrementCountBy: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
  },
});

export const { incrementCount, decrementCount, incrementCountBy } =
  counterSlice.actions;

export const counter = counterSlice.reducer;

const selectState = (state: RootState) => state.counter;

export const selectCount = createSelector(
  selectState,
  (state): number => state.count,
);
