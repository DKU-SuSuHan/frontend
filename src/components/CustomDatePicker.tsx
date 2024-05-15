import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';
import { addMonths } from 'date-fns';
import { styled } from 'styled-components';

export const CustomDatePicker = ({
  setTravelStartDate,
  setTravelEndDate,
}: {
  setTravelStartDate: React.Dispatch<React.SetStateAction<Date | null>>;
  setTravelEndDate: React.Dispatch<React.SetStateAction<Date | null>>;
}) => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(null);

  const onChange = (dates: [any, any]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    setTravelStartDate(start);
    setTravelEndDate(end);
  };

  return (
    <DatePickerContainer>
      <DatePicker
        selected={startDate}
        onChange={onChange}
        minDate={new Date()}
        maxDate={addMonths(new Date(), 5)}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline
        showDisabledMonthNavigation
      />
    </DatePickerContainer>
  );
};

const DatePickerContainer = styled.div`
  display: flex;
  .react-datepicker {
    width: 240px;
  }
  margin: 10px auto;

  .react-datepicker__header {
    background-color: #ffffff;
  }
  .react-datepicker__day--in-selecting-range {
    background-color: #ffaa86b3;
    border-radius: 50%;
  }
  .react-datepicker__day--selected {
    background-color: #ffaa86;
    border-radius: 50%;

    &:hover {
      border-radius: 50%;
      background-color: #bd736a;
    }
  }

  .react-datepicker__day--in-range {
    background-color: #ffd3aa;
    border-radius: 50%;
  }

  .react-datepicker__day--range-start {
    background-color: #ffaa86;
    border-radius: 50%;
  }

  .react-datepicker__day--range-end {
    background-color: #ffaa86;
    border-radius: 50%;
  }

  .react-datepicker__day--weekend:not(.react-datepicker__day--disabled) {
    color: #ff0000;
  }
  .react-datepicker__day--keyboard-selected:not(
      .react-datepicker__day--range-end
    ) {
    background-color: #ffffff;
  }
`;
