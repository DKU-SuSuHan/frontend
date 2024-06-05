import { createSlice } from '@reduxjs/toolkit';
import { travelDetailStatus } from '../../interface/travelDetailStatus';

const initialState: travelDetailStatus = {
  travelId: 0,
  travelMateId: 0,
  title: '',
  sido: '',
  sgg: '',
  startAt: '',
  endAt: '',
  groupRole: '',
  totalBudget: 0,
  totalDay: 0,
};

export const travelDetailSlice = createSlice({
  name: 'travelDetail',
  initialState,
  reducers: {
    setTravelId: (state, action) => {
      state.travelId = action.payload;
    },
    setTravelMateId: (state, action) => {
      state.travelMateId = action.payload;
    },
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setSido: (state, action) => {
      state.sido = action.payload;
    },
    setSgg: (state, action) => {
      state.sgg = action.payload;
    },
    setStartAt: (state, action) => {
      state.startAt = action.payload;
    },
    setEndAt: (state, action) => {
      state.endAt = action.payload;
    },
    setGroupRole: (state, action) => {
      state.groupRole = action.payload;
    },
    setTotalBudget: (state, action) => {
      state.totalBudget = action.payload;
    },
    setTotalDay: (state, action) => {
      state.totalDay = action.payload;
    },
  },
});

export const {
  setTravelId,
  setTravelMateId,
  setTitle,
  setSido,
  setSgg,
  setStartAt,
  setEndAt,
  setGroupRole,
  setTotalBudget,
  setTotalDay,
} = travelDetailSlice.actions;
export default travelDetailSlice.reducer;
