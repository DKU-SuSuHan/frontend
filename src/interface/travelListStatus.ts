import { travelCardStatus } from './travelCardstatus';

export interface travelListStatus {
  plannedTravels: Array<travelCardStatus>;
  endedTravels: Array<travelCardStatus>;
}
