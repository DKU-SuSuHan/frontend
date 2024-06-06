import axios from 'axios';
import { placeFormStatus } from '../interface/placeFormStatus';

//vite 환경 변수 사용
const SERVER_API_URL = import.meta.env.VITE_SERVER_API_URL;

export async function postNewPlace({
  data,
  travelNum,
}: {
  data: placeFormStatus;
  travelNum: string;
}) {
  const accessToken = localStorage.getItem('accessToken');
  console.log(data);
  try {
    const response = await axios.post(
      `${SERVER_API_URL}/api/v1/travels/${travelNum}/places`,
      {
        travelDate: data.travelDate,
        name: data.name,
        postcode: data.postcode,
        address: data.address,
        budget: data.budget,
        urlLink: data.urlLink,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    return response.data.travelId;
  } catch (error: any) {
    console.log(error);
  }
}
