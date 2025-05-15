import React from 'react'
import Collections from './Collections'
import Calendar from './Calendar'

const Content = () => {
  return (
    <section className='max-w-full flex flex-col gap-10 md:gap-15 lg:gap-20'>
        <Collections />
        <Calendar />
    </section>
  )
}

export default Content