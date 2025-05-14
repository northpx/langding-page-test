import React from 'react'
import Collections from './Collections'
import Calendar from './Calendar'

const Content = () => {
  return (
    <section className='flex '>
        <Collections />
        <Calendar />
    </section>
  )
}

export default Content