import React from 'react'
import GridCalendar from './GridCalendar';
import Cards from '../Cards/Cards';

const Calendar = () => {
    return  (
        <section className='w-full mx-auto px-5 md:px-59 pb-10 md:pb-20 border border-white h-[100px]'>
            <div className='w-full mx-auto border border-white h-[100px]'>
                <div className='flex flex-col md:'>
                    <div className='flex-1 border h-[100px]'></div>
                    <div className='w-[480px] border shrink-0'>
                        
                    </div>
                </div>
            </div>
        </section>
  );
}

export default Calendar