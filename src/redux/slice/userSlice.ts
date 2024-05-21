import { createSlice } from '@reduxjs/toolkit';
import ProfileImg from '../../assets/DefaultProfileImage.png';
import { userState } from '../../interface/userStatus';

const initialState: userState = {
  id: -1,
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
    setId: (state, action) => {
      state.id = action.payload;
    },
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
  setId,
  setEmail,
  setNickname,
  setRole,
  setLoginType,
  setProfileImageUrl,
} = userSlice.actions;
export default userSlice.reducer;
