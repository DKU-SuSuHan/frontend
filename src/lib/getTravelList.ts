import axios from 'axios';
import { tokenExpirationHandler } from './tokenExpirationHandler';
import {
  setPlannedTravels,
  setEndedTravels,
  setRemoveEndedTravels,
  setRemovePlannedTravels,
} from '../redux/slice/travelListSlice';
import { Dispatch } from '@reduxjs/toolkit';

//vite 환경 변수 사용
const SERVER_API_URL = import.meta.env.VITE_SERVER_API_URL;

export async function getTravelList(params: Boolean, dispatch: Dispatch) {
  const accessToken = localStorage.getItem('accessToken');

  try {
    const response = await axios.get(
      `${SERVER_API_URL}/api/v1/travels?status=${params ? 'planned' : 'ended'}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
    if (response.status === 200) {
      dispatch(setRemoveEndedTravels());
      dispatch(setRemovePlannedTravels());
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
