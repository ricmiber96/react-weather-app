import { React } from 'react'

export default function CardWeek ({ day, date, tempMax, tempMin, icon }) {
  const iconUrl = `../../icons/${icon}.svg`
  return (
    <div className='flex flex-col  items-center justify-center align-center rounded-lg text-white bg-card-color p-8 m-2'>
      <div className='flex flex-row'>
        <div className='w-1/3 text-md mr-2'>{day}</div>
        <div className='w-2/3 text-md'>{date}</div>
      </div>
      <img className='h-2/3 mt-6' src={iconUrl} alt='icon weather' />
      <div className='flex flex-col items-center justify-center align-center'>
        <span className='text-xl font-bold'>{tempMax} / {tempMin}</span>
        <span className='text-sm'>ºC - Max/Min</span>
      </div>
    </div>
  )
}
