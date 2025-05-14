import React from 'react'
import Collections from './Collections'
import Calendar from './Calendar'

const Content = () => {
  return (
    <section className='flex flex-col gap-10 md:gap-20 py-10 md:py-20 px-5 md:px-0 border-b-[10px] border-white'>
        <Collections />
        <Calendar />
    </section>
  )
}

export default Content