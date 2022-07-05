import { useState, useEffect } from 'react'

export const useFetch = ({ city, latitude, longitude }) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const API_KEY = process.env.REACT_APP_API_KEY
  const getUrl = (city, latitude, longitude) => {
    return latitude && longitude ? `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric` : `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&units=metric&cnt=7&appid=${API_KEY}`
  }

  useEffect(() => {
    setLoading(true)
    fetch(getUrl(city, latitude, longitude))
      .then((response) => response.json())
      .then((data) => {
        setLoading(false)
        if (data.cod >= 400) {
          setError(data.message)
          return
        }
        setData(data)
      })
      .catch((err) => {
        console.log(err)
        setError(err)
      })
      .finally(() => setLoading(false))
  }, [city])

  return { data, loading, error }
}
