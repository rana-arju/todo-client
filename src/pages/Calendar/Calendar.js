import React, {useState }from 'react';
import DatePicker from "react-datepicker";
import Complate from '../../components/Complete/Complate';

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  return (
    <div className="w-4/5 md:w-80 mx-auto h-80 md:mt-10">
            <DatePicker
                selected={startDate}
                onChange={onChange}
                startDate={startDate}
                endDate={endDate}
                excludeDates={[(new Date(), 1), (new Date(), 5)]}
                selectsRange
                selectsDisabledDaysInRange
                inline
            />
    </div>
  );
};

export default Calendar;