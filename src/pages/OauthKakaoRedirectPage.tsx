import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getUser } from '../lib/getUser';

import { login } from '../redux/slice/loginSlice';

//vite 환경 변수 사용
const SERVER_API_URL = import.meta.env.VITE_SERVER_API_URL;
const CLIENT_API_URL = import.meta.env.VITE_CLIENT_API_URL;
const KAKAO_REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;

function OauthKakaoRedirectPage() {
  // const REDIRECT_URI = `${window.location.href}`;
  const REDIRECT_URI = `${CLIENT_API_URL}/auth`;

  const dispatch = useDispatch();
  const authCode = new URL(window.location.href).searchParams.get('code');
  console.log(authCode);

  async function getAuthorization() {
    const makeFormData = (params: { [key: string]: string }) => {
      const searchParams = new URLSearchParams();
      Object.keys(params).forEach(key => {
        searchParams.append(key, params[key]);
      });

      return searchParams;
    };
    const data = makeFormData({
      grant_type: 'authorization_code',
      client_id: `${KAKAO_REST_API_KEY}`,
      redirect_uri: `${REDIRECT_URI}`,
      code: `${authCode ? authCode : ''}`,
    });
    console.log(data);
    try {
      const response = await axios.post(
        `https://kauth.kakao.com/oauth/token`,
        data,
        {
          headers: {
            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
          },
        },
      );
      if (response.status === 200) {
        localStorage.setItem('kakaoAccessToken', response.data.access_token);
        postAuthorization();
      }
    } catch (error) {
      console.log('KakaoLogin Error');
      console.log(error);
    }
  }

  async function postAuthorization() {
    const kakaoToken = localStorage.getItem('kakaoAccessToken');
    try {
      const body = {
        kakaoAccessToken: kakaoToken,
      };
      const response = await axios.post(
        `${SERVER_API_URL}/api/v1/auth/login/kakao`,
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
        window.location.href = '/';
      }
    } catch (error: any) {
      console.log('KakaoLogin Error');
      console.log(error);
    }
  }

  useEffect(() => {
    getAuthorization();
    // postAuthorization();
  });
  return <></>;
}
export default OauthKakaoRedirectPage;
