import axios from 'axios';
import { tokenExpirationHandler } from './tokenExpirationHandler';
import { useDispatch } from 'react-redux';
import {
  setPlannedTravels,
  setEndedTravels,
} from '../redux/slice/travelListSlice';

//vite 환경 변수 사용
const SERVER_API_URL = import.meta.env.VITE_SERVER_API_URL;

export async function getTravelList(params: Boolean) {
  const dispatch = useDispatch();
  const accessToken = localStorage.getItem('accessToken');

  try {
    const response = await axios.get(
      `${SERVER_API_URL}/api/v1/travels?status=${params ? 'planned' : 'ended'}`,
      {
        headers: {
          'access-token': accessToken,
        },
      },
    );
    if (response.status === 200) {
      response.data.map((item: any) => {
        {
          params
            ? dispatch(setPlannedTravels(item))
            : dispatch(setEndedTravels(item));
        }
      });
    }
  } catch (error: any) {
    console.log(error);
    if (error.response.status === 403) {
      console.log('session');
      tokenExpirationHandler(getTravelList);
    }
  }
}
