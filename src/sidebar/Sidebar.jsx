import React from 'react'
import Location from './Location'

const Sidebar = ({handleChange, handleClick}) => {
  return (
    <div className='space-y-5'> 
        <h1 className='text-lg font-bold mb-2'>Filters</h1>
        <Location handleChange={handleChange}/>
    </div>
  )
}

export default Sidebar