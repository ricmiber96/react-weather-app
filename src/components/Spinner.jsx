import { React, useEffect } from 'react'
import '../styles/loader.css'

export default function Spinner () {
  useEffect(() => {
    setTimeout(() => {}, 5000)
  }, [])

  return (
    <div className='loader' />
  )
}
