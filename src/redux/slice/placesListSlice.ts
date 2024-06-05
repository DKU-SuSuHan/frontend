import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { placeStatus } from '../../interface/placeStatus';
import { placesListStatus } from '../../interface/placesListStatus';

const initialState: placesListStatus = {
  travelId: 0,
  travelDate: '2024-01-01',
  travelPlaceList: [],
  oneDayBudget: 0,
};

export const placesListSlice = createSlice({
  name: 'travels',
  initialState,
  reducers: {
    setTravelId: (state, action) => {
      state.travelId = action.payload;
    },
    setTravelDate: (state, action) => {
      state.travelDate = action.payload;
    },
    setTravelPlaceList: (state, action: PayloadAction<placeStatus>) => {
      state.travelPlaceList.push(action.payload);
    },
    setTravelOneDayBudget: (state, action) => {
      state.oneDayBudget = action.payload;
    },
    setRemoveTravelPlaceList: state => {
      state.travelPlaceList = [];
    },
  },
});

export const {
  setTravelId,
  setTravelDate,
  setTravelPlaceList,
  setTravelOneDayBudget,
  setRemoveTravelPlaceList,
} = placesListSlice.actions;
export default placesListSlice.reducer;
