import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import loginSlice from '../redux/slice/loginSlice';
import userSlice from '../redux/slice/userSlice';
import travelListSlice from '../redux/slice/travelListSlice';
import travelMateSlice from './slice/travelMateSlice';
import travelDetailSlice from './slice/travelDetailSlice';
import placesListSlice from './slice/placesListSlice';
// configureStore를 사용하여 스토어를 설정
const store = configureStore({
  reducer: {
    // reducer 속성에는 reducer들을 포함
    login: loginSlice,
    user: userSlice,
    travels: travelListSlice,
    travelMate: travelMateSlice,
    travelDetail: travelDetailSlice,
    placeDetail: placesListSlice,
  },
});

// RootState라는 타입 정의 -> 스토어의 상태를 나타냄
// typeof store.getState() -> 스토어의 상태 타입을 가져오는 역할
export type RootState = ReturnType<typeof store.getState>;

// AppDispatch라는 타입 정의 -> dispatch 메서드의 타입 나타냄
export type AppDispatch = typeof store.dispatch;

// AppThunk 타입 정의
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
