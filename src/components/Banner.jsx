import React, { useState } from 'react'
import { FiMapPin, FiSearch } from "react-icons/fi"

const Banner = ({ query, handleInputChange }) => {
    return (
        <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-20 py-14'>
            <h1 className='text-5xl font-bold text-primary mb-3'>Find your <span className='text-blue'>new job</span> today</h1>
            <p className='text-lg text-black/70 mb-8'>Thousands of jobs in the computer, engineering and technology sectors are waiting for you</p>
            <form>
                <div className='flex justify-start md:flex-row flex-col md:gap-0 gap-4'>
                    <div className='relative flex md:rounded-s-md rounded shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset md:w-1/2 w-full'>
                        <FiSearch className='absolute inset-y-0 left-0 mt-2.5 ml-2 text-gray-400' />
                        <input type="text" name='title' id='title' placeholder='What position are you looking for?' className='relative block flex-1 border-0 bg-transparent py-1.5 pl-10 text-gray-900 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6' onChange={handleInputChange} value={query} />
                    </div>
                    <div className='relative flex md:rounded-s-none rounded shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset md:w-1/3 w-full'>
                        <FiMapPin className='absolute inset-y-0 left-0 mt-2.5 ml-2 text-gray-400' />
                        <input type="text" name='title' id='title' placeholder='Location' className='relative block flex-1 border-0 bg-transparent py-1.5 pl-10 text-gray-900 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6'  />
                    </div>
                    <button type='submit' className='bg-blue py-2 px-8 text-white md:rounded-s-none rounded'>Search</button>
                </div>
            </form>
        </div>
    )
}

export default Banner