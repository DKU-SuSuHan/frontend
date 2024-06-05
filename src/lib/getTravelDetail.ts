import axios from 'axios';
import { Dispatch } from '@reduxjs/toolkit';
import {
  setEndAt,
  setGroupRole,
  setSgg,
  setSido,
  setStartAt,
  setTitle,
  setTotalBudget,
  setTotalDay,
  setTravelId,
  setTravelMateId,
} from '../redux/slice/travelDetailSlice';

//vite 환경 변수 사용
const SERVER_API_URL = import.meta.env.VITE_SERVER_API_URL;

export async function getTravelDetail(data: string, dispatch: Dispatch) {
  const accessToken = localStorage.getItem('accessToken');

  try {
    const response = await axios.get(
      `${SERVER_API_URL}/api/v1/travels/${data}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
    // 가져온 데이터를 상태에 저장
    dispatch(setTravelId(response.data.travelId));
    dispatch(setTravelMateId(response.data.travelMateId));
    dispatch(setTitle(response.data.title));
    dispatch(setSido(response.data.sido));
    dispatch(setSgg(response.data.sgg));
    dispatch(setStartAt(response.data.startAt));
    dispatch(setEndAt(response.data.endAt));
    dispatch(setTotalBudget(response.data.totalBudget));
    dispatch(setGroupRole(response.data.groupRole));

    if (response.data.totalDay) {
      dispatch(setTotalDay(response.data.totalDay));
    }
    return response.data;
  } catch (error: any) {
    console.log(error);
  }
}
