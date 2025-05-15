import React from 'react'
import GridCalendar from './GridCalendar';
import Cards from '../Cards/Cards';

const Calendar = () => {
    return  (
        <section className='w-full mx-auto px-5 md:px-59 pb-10 md:pb-20 border border-white h-[100px]'>
            <div className='w-full mx-auto border border-white h-[100px]'>
                <div className='flex flex-col md:flex-row'>
                    <div className='flex-1 border border-red-400 h-[500px] w-full'>ok2</div>
                    <div className='w-[480px] border shrink-0 h-[100px]'>
                        ok1
                    </div>
                </div>
            </div>
        </section>
  );
}

export default Calendar