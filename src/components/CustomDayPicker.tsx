import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';

export const CustomDayPicker = ({
  setTravelPlaceDay,
}: {
  setTravelPlaceDay: React.Dispatch<React.SetStateAction<Date | null>>;
}) => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  return (
    <DatePicker
      selected={startDate}
      onChange={date => {
        setStartDate(date);
        setTravelPlaceDay(date);
      }}
    />
  );
};
