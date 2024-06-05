import { placeStatus } from './placeStatus';

export interface placesListStatus {
  travelId: number;
  travelDate: String;
  travelPlaceList: Array<placeStatus>;
  oneDayBudget: number;
}
