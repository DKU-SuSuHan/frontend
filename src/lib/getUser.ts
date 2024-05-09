import axios from 'axios';
import { useDispatch } from 'react-redux';
import {
  setEmail,
  setLoginType,
  setNickname,
  setRole,
} from '../redux/slice/userSlice';
import { tokenExpirationHandler } from './tokenExpirationHandler';
import { logout } from '../redux/slice/loginSlice';

//vite 환경 변수 사용
const SERVER_API_URL = import.meta.env.VITE_SERVER_API_URL;

export async function getUser() {
  const dispatch = useDispatch();
  const accessToken = localStorage.getItem('accessToken');

  console.log(accessToken);
  try {
    // setIsLoading(true);
    const response = await axios.get(`${SERVER_API_URL}/member/my-info`, {
      headers: {
        Authorization: accessToken,
        //ngrok 사용시에만 넣음
        //'ngrok-skip-browser-warning': 'skip-browser-warning',
      },
    });
    // accessToken으로 유저 정보 불러오기 성공 (user 정보 저장)
    //     email: string;
    //     nickname: string;
    //    role: string;
    //    loginType: string;
    //    profileImageUrl: string;
    if (response.status === 200) {
      //get한 정보 userSlice 저장
      dispatch(setNickname(response.data.nickname));
      dispatch(setEmail(response.data.email));
      dispatch(setRole(response.data.role));
      dispatch(setLoginType(response.data.loginType));
      //이미지 있는 경우만 불러옴
      if (response.data.profileImage) {
        // dispatch(setProfileImg(response.data.profileImage));
      }
      console.log('User information has been received successfully.');
      // dispatch(login());
    }
  } catch (err: any) {
    //accessToken 만료일 경우
    if (err.response.status === 403) {
      console.log('session');
      tokenExpirationHandler(getUser);
    } else {
      dispatch(logout());
    }
  }
}
