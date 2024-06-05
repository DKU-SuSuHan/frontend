import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { travelListStatus } from '../../interface/travelListStatus';
import { travelCardStatus } from '../../interface/travelCardstatus';

const initialState: travelListStatus = {
  plannedTravels: [],
  endedTravels: [],
};

export const travelListSlice = createSlice({
  name: 'travels',
  initialState,
  reducers: {
    setPlannedTravels: (state, action: PayloadAction<travelCardStatus>) => {
      state.plannedTravels.push(action.payload);
    },
    setEndedTravels: (state, action: PayloadAction<travelCardStatus>) => {
      state.endedTravels.push(action.payload);
    },
    setRemovePlannedTravels: state => {
      state.plannedTravels = [];
    },
    setRemoveEndedTravels: state => {
      state.endedTravels = [];
    },
  },
});

export const {
  setPlannedTravels,
  setEndedTravels,
  setRemovePlannedTravels,
  setRemoveEndedTravels,
} = travelListSlice.actions;
export default travelListSlice.reducer;
