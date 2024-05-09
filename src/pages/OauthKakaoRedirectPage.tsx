import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getUser } from '../lib/getUser';

import { login } from '../redux/slice/loginSlice';

//vite 환경 변수 사용
const SERVER_API_URL = import.meta.env.VITE_SERVER_API_URL;

function OauthKakaoRedirectPage() {
  const dispatch = useDispatch();
  const code = new URL(window.location.href).searchParams.get('code');
  console.log(code);

  async function postAuthorization() {
    try {
      const body = {
        kakaoAccessToken: code,
      };
      const response = await axios.post(
        `${SERVER_API_URL}/api/v1/auth/kakao`,
        body,
      );

      //카카오 로그인 성공
      if (response.status === 200) {
        // 1. 토큰 저장
        const accessToken = response.data['accessToken'];
        const refreshToken = response.data['refreshToken'];

        // 2. 토큰을 locarStorage 저장
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);

        getUser();
        dispatch(login());
      }
    } catch (error: any) {
      console.log('KakaoLogin Error');
      console.log(error.response);
    }
  }

  useEffect(() => {
    postAuthorization();
  });
  return <></>;
}
export default OauthKakaoRedirectPage;
