import React from 'react'
import Collections from './Collections'
import Calendar from './Calendar'

const Content = () => {
  return (
    <section className='flex flex-col gap-'>
        <Collections />
        <Calendar />
    </section>
  )
}

export default Content