import { createSlice } from '@reduxjs/toolkit';
import ProfileImg from '../../assets/DefaultProfileImage.png';

export interface userState {
  email: string;
  nickname: string;
  role: string;
  loginType: string;
  profileImageUrl: string;
}

const initialState: userState = {
  email: '',
  nickname: 'user',
  role: 'ADMIN',
  loginType: 'KAKAO',
  profileImageUrl: ProfileImg,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setNickname: (state, action) => {
      state.nickname = action.payload;
    },
    setRole: (state, action) => {
      state.role = action.payload;
    },
    setLoginType: (state, action) => {
      state.loginType = action.payload;
    },
    setProfileImageUrl: (state, action) => {
      state.profileImageUrl = action.payload;
    },
  },
});

export const {
  setEmail,
  setNickname,
  setRole,
  setLoginType,
  setProfileImageUrl,
} = userSlice.actions;
export default userSlice.reducer;
