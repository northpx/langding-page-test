import React from 'react'
import Collections from './Collections'
import Calendar from './Calendar'

const Content = () => {
  return (
    <section className='flex flex-col gap-10 md:gap-20'>
        <Collections />
        <Calendar />
    </section>
  )
}

export default Content