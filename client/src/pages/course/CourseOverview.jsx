import React from 'react'
import Navbar from '../../components/nav/Navbar'

function CourseOverview() {
  return (
    <div className='grid bg:white dark:bg-black dark:text-white grid-rows-reg h-screen'>
        <Navbar />
        <section className='grid bg-blue-300'></section>
    </div>
  )
}

export default CourseOverview