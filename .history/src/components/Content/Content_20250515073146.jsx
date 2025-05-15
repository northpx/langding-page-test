import React from 'react'
import Collections from './Collections'
import Calendar from './Calendar'

const Content = () => {
  return (
    <section className='w-full flex flex-col gap-10 md:gap-20'>
        <Collections />
    </section>
  )
}

export default Content