import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import GridCalendars from './GridCalendars';

const Calendars = () => {
    return  (
        <section className='w-full mx-auto py-10 px-0 md:px-59'>
            <GridCalendars />
        </section>
  );
}

export default Calendars