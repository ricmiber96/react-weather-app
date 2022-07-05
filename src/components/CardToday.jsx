import { React, useEffect, useState } from 'react'
import { GoLocation } from 'react-icons/go'

export default function CardToday ({ city, weather, icon }) {
  const iconUrl = `../../icons/${icon}.svg`
  const [time, setTime] = useState(new Date().toLocaleTimeString())
  const [date, setDate] = useState(new Date().toLocaleDateString())

  const getTime = () => {
    setTime(new Date().toLocaleTimeString())
    setDate(new Date().toLocaleDateString())
  }

  useEffect(() => {
    setInterval(getTime, 1000)
  }, [])

  return (
    <div className='w-1/3 flex flex-col justify-around rounded-lg text-white bg-card-color mt-6 p-8'>
      <div className='flex flex-row justify-between'>
        <div className='text-white text-2xl'>
          <p className=''>Today</p>
          <p>{time}</p>
        </div>
        <div className='text-white text-xl'>
          {date}
        </div>
      </div>
      <div className='flex flex-col text-white mt-6 items-center'>
        <img src={iconUrl} width='40%' alt='weather icon' />
        <h2 className='text-6xl font-bold'>{weather.temp.day}ºC</h2>
      </div>
      <div className='flex flex-row items-center mt-6 text-2xl'>
        <GoLocation color='#fff' className='mr-2' />
        <p>{city.charAt(0).toUpperCase() + city.slice(1)}</p>
      </div>
    </div>
  )
}
