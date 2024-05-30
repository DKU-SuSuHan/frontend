import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import axios from 'axios';

//vite 환경 변수 사용
const SERVER_API_URL = import.meta.env.VITE_SERVER_API_URL;

export async function postTravelMates({ travelId }: { travelId: number }) {
  const accessToken = localStorage.getItem('accessToken');

  const travelMateList = useSelector((status: RootState) => status.travelMate);
  const userIds: number[] = [];
  travelMateList.map(item => {
    userIds.push(item.id);
  });
  try {
    const response = await axios.post(
      `${SERVER_API_URL}/api/v1/travels/${travelId}/mates`,
      userIds,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
    return response.status;
  } catch (error: any) {
    console.log(error);
  }
}
