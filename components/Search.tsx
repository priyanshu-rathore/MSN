import React from 'react'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';


const Search = () => {
  return (
    <div className='flex items-center overflow-hidden rounded-md bg-white'>
      <input type="text" className='outline-none bg-none px-4 w-[500px] text-sm h-10'/>
      <div className='w-16 bg-blue-500 h-10 flex justify-center items-center'>
        <SearchRoundedIcon className='text-white'/>
      </div>
    </div>
  )
}

export default Search
