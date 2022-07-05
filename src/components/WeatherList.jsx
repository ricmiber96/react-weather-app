import { React, useEffect, useState } from 'react'
import CardWeek from './CardWeek'

export default function WeatherList ({ data }) {
  const [weathers, setWeathers] = useState([])

  const getDate = (time) => {
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    const day = new Date(time * 1000)
    return {
      date: day.toLocaleDateString(),
      day: days[day.getDay()]
    }
  }

  useEffect(() => {
    setWeathers(data)
  }, [data])

  useEffect(() => {
  }, [])

  return (
    <div className='flex flex-row mt-6 mb-8'>
      {
        weathers.map((weather, i) => (
          <CardWeek key={i} tempMax={Math.floor(weather.temp.max, -1)} tempMin={Math.round(weather.temp.min)} icon={weather.weather[0].icon} day={getDate(weather.dt).day} date={getDate(weather.dt).date} />
        ))

    }
    </div>
  )
}
