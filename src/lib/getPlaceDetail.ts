import axios from 'axios';
import { Dispatch } from '@reduxjs/toolkit';
import {
  setRemoveTravelPlaceList,
  setTravelDate,
  setTravelId,
  setTravelOneDayBudget,
  setTravelPlaceList,
} from '../redux/slice/placesListSlice';
import { setRemoveEndedTravels } from '../redux/slice/travelListSlice';
import { placeStatus } from '../interface/placeStatus';

//vite 환경 변수 사용
const SERVER_API_URL = import.meta.env.VITE_SERVER_API_URL;

export async function getPlaceDetail(
  travelId: string,
  travelDay: number,
  dispatch: Dispatch,
) {
  const accessToken = localStorage.getItem('accessToken');

  try {
    const response = await axios.get(
      `${SERVER_API_URL}/api/v1/travels/${travelId}/places?travelDay=${travelDay}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
    // 가져온 데이터를 상태에 저장
    console.log(response.data);
    dispatch(setTravelId(response.data.travelId));
    dispatch(setTravelDate(response.data.travelDate));
    dispatch(setRemoveTravelPlaceList());
    dispatch(setRemoveEndedTravels());

    if (response.data.travelPlaceList) {
      const getTravelPlaceList = response.data.travelPlaceList;
      console.log(getTravelPlaceList);
      getTravelPlaceList.map((item: any) => {
        const place: placeStatus = {
          id: item.id,
          travelDay: item.travelDay,
          name: item.name,
          postcode: item.postcode,
          sequence: item.sequence,
          urlLink: item.urlLink,
          address: item.address,
          budget: item.budget,
        };
        dispatch(setTravelPlaceList(place));
      });
    }

    console.log(response.data);

    dispatch(setTravelOneDayBudget(response.data.oneDayBudget));
    return response.data;
  } catch (error: any) {
    console.log(error);
  }
}
