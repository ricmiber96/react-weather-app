import { React } from 'react'
import { BsSearch, BsSunFill } from 'react-icons/bs'
import { IoSend } from 'react-icons/io5'

export default function InputLocation ({ handleSubmit, handleCity }) {
  return (
    <div className='w-2/3 flex flex-row justify-center mt-6'>

      <div class='relative mr-6 w-96'>
        <div class='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
          <BsSearch size={15} color='#fff' />
        </div>
        <form onSubmit={handleSubmit}>
          <input
            class='block p-4 pl-10 w-full text-sm rounded-lg   bg-card-color focus:bg-card-color text-white'
            placeholder='Location...'
            required
            onChange={handleCity}
          />
          <button type='submit' class='text-white absolute right-1 bottom-1  bg-background font-medium rounded-lg text-sm px-4 py-4'>
            <IoSend size={14} color='#fff' />
          </button>
        </form>
      </div>

      <div className='flex justify-around'>
        <button className='rounded-lg bg-card-color p-4'><BsSunFill color='#fff' /></button>
      </div>

    </div>
  )
}
