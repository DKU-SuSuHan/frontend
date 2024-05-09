import axios from 'axios';

//vite 환경 변수 사용
const SERVER_API_URL = import.meta.env.VITE_SERVER_API_URL;

//accessToken 만료시 refreshToken으로 토큰 갱신
export async function tokenExpirationHandler(fun: Function) {
  const refreshToken = localStorage.getItem('refreshToken');

  try {
    //refreshToken으로 accessToken 재발급 시도

    //api 타입 맞춰야함
    const response = await axios.post(
      `${SERVER_API_URL}/token/expiration`,
      null,
      {
        headers: {
          'Refresh-Token': `${refreshToken}`,
        },
      },
    );

    if (response.status === 200) {
      //refreshToken이 유효한 상태일 경우 새로운 accessToken 재등록
      //accessToken 재등록
      const newAccessToken = response.data['accessToken'];
      const newRefreshToken = response.data['refreshToken'];
      localStorage.setItem('accessToken', newAccessToken);
      localStorage.setItem('refreshToken', newRefreshToken);

      // accessToken 재등록 후 callBack 함수 호출
      fun();
      return;
    }
  } catch (error: any) {
    //refresh 토큰도 만료된 경우
    console.log(error);
    //오류 상태 확인 필요
    if (error.response.status === 403) {
      // 로컬 스토리지 토큰들 삭제
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');

      alert('로그인 후 시도해주세요');
      window.location.reload();
    } else {
      console.log(error);
    }
  }
}
