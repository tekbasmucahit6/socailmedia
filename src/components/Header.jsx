import React from 'react'

function Header() {
  return (
    <div className='bg-blue-950 flex justify-between items-center p-7 text-white'>
        <strong className='font-extrabold text-3xl text-amber-500'>SLİCEE!</strong>
        <form action="">
            <input type="search" className='px-4 py-2 text-black rounded-full border-none w-48 xl:w-72 lg:w-72 md:w-72'  placeholder='kullanıcı ismi ara '/>
        </form>
    </div>
  )
}

export default Header