import axios from 'axios';

//vite 환경 변수 사용
const SERVER_API_URL = import.meta.env.VITE_SERVER_API_URL;

export async function getMateSearch(mateName: string) {
  const accessToken = localStorage.getItem('accessToken');
  try {
    const response = await axios.get(
      `${SERVER_API_URL}/api/v1/users/search?nickname=${mateName}`,
      {
        headers: {
          'access-token': `${accessToken}`,
        },
      },
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
}
