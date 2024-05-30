import axios from 'axios';
// import { useDispatch } from 'react-redux';
import {
  setId,
  setNickname,
  setProfileImageUrl,
} from '../redux/slice/userSlice';
import { tokenExpirationHandler } from './tokenExpirationHandler';
import { login, logout } from '../redux/slice/loginSlice';
import { Dispatch } from '@reduxjs/toolkit';

//vite 환경 변수 사용
const SERVER_API_URL = import.meta.env.VITE_SERVER_API_URL;

export async function getUser(dispatch: Dispatch) {
  // const dispatch = useDispatch();
  const accessToken = localStorage.getItem('accessToken');

  console.log(accessToken);
  try {
    const response = await axios.get(`${SERVER_API_URL}/api/v1/users/login`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (response.status === 200) {
      //get한 정보 userSlice 저장
      console.log(response.data);

      dispatch(setNickname(response.data.nickname));
      dispatch(setId(response.data.id));
      //이미지 있는 경우만 불러옴
      if (response.data.profileImage) {
        dispatch(setProfileImageUrl(response.data.profileImage));
      }
      console.log('User information has been received successfully.');
      dispatch(login());
    }
  } catch (err: any) {
    //accessToken 만료일 경우
    if (err.response.status === 403) {
      console.log('session');
      tokenExpirationHandler(getUser);
    } else {
      console.log(err);
      dispatch(logout());
    }
  }
}
