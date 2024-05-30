import axios from 'axios';
import { travelFormStatus } from '../interface/travelFormStatus';

//vite 환경 변수 사용
const SERVER_API_URL = import.meta.env.VITE_SERVER_API_URL;

export async function postNewTravel({ data }: { data: travelFormStatus }) {
  const accessToken = localStorage.getItem('accessToken');
  console.log(data);
  try {
    const response = await axios.post(
      `${SERVER_API_URL}/api/v1/travels`,
      {
        templateNum: data.templateNum,
        title: data.title,
        sido: data.sido,
        sgg: data.sgg,
        startAt: data.startAt,
        endAt: data.endAt,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    return response.data.id;
  } catch (error: any) {
    console.log(error);
  }
}
