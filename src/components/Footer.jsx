import { React } from 'react'

export default function Footer () {
  return (
    <footer class='w-full bg-card-color text-white mt-12'>
      <div class='text-center p-6 bg-gray-200'>
        <span>© {new Date().getFullYear()} </span>
        🚀 built by
        <a class='text-gray-600 font-semibold' href='https://github.com/ricmiber96'> ricmiber96</a>
      </div>
    </footer>
  )
}
