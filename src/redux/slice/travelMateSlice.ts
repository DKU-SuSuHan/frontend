import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { travelMateStatus } from '../../interface/travelMateStatus';

const initialState: Array<travelMateStatus> = [];

export const travelMateSlice = createSlice({
  name: 'travelMate',
  initialState,
  reducers: {
    setTravelMateList: (state, action: PayloadAction<travelMateStatus>) => {
      state.push(action.payload);
    },
    setMinusTravelMateList: (
      state,
      action: PayloadAction<travelMateStatus>,
    ) => {
      state.filter(item => {
        item.id !== action.payload.id;
      });
    },
  },
});

export const { setTravelMateList } = travelMateSlice.actions;
export default travelMateSlice.reducer;
