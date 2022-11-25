import React, { useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';

const BookingBanner = () => {

  const [selecteddate, setSelecteddate] = useState(new Date());

  let footer = <p>Please pick a day.</p>;
  if (selecteddate) {
    footer = <p>You picked {format(selecteddate, 'PP')}.</p>;
  }

    return (
        <header className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-2">
                <div className="text-indigo-800 lg:pr-10">
                <DayPicker color="#ffagaf" mode="single" selecteddate={selecteddate} onSelect={setSelecteddate} footer={footer} />
                </div>
                <div>
                <img
                    className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                    src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                    alt=""
                />
                </div>
            </div>
        </header>
    );
};

export default BookingBanner;