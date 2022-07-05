import { React, useEffect, useState } from 'react'
import CardToday from '../components/CardToday'
import Footer from '../components/Footer'
import InputLocation from '../components/InputLocation'
import Spinner from '../components/Spinner'
import WeatherList from '../components/WeatherList'
import { useFetch } from '../hooks/useFetch'

export default function WeatherApp () {
  const [city, setCity] = useState('Valencia')
  let cityInput = ''
  const { data, loading, error } = useFetch({ city })
  if (error) {
    console.log(error)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setCity(cityInput.toLowerCase())
  }

  const handleCity = (e) => {
    cityInput = e.target.value
  }

  useEffect(() => {
    document.title = 'My Page Title'
  }, [])

  const getContent = () => {
    if (error) return <h2 className='text-white'>Error when fetching: {error}</h2>
    if (!data && loading) return <Spinner />
    if (!data) return null
    return (
      <>
        <CardToday city={city} weather={data.list[0]} icon={data.list[0].weather[0].icon} />
        <WeatherList data={data.list} />
      </>
    )
  }

  return (
    <div className='flex flex-col items-center justify-center align-center '>
      <InputLocation handleSubmit={handleSubmit} handleCity={handleCity} />
      {getContent()}
      <Footer />
    </div>
  )
}
