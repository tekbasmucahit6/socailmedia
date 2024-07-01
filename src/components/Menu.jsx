import React from 'react'
import { CgProfile } from "react-icons/cg";
import { AiFillMessage } from "react-icons/ai";
import { HiOutlineAdjustments } from "react-icons/hi";
import { HiOutlinePaperClip } from "react-icons/hi";
function Menu() {
  return (
    <div className='fixed bottom-0 w-full xl:top-24 xl:w-96 lg:fixed lg:top-24 lg:w-76  md:fixed md:top-24 md:w-72  bg-blue-950 text-white'>
        <div className='flex justify-center xl:justify-normal lg:justify-normal md:justify-normal items-center xl:grid lg:grid md:grid'>
            
            <strong className='hidden xl:flex p-2 lg:flex md:flex text-center items-center justify-center bg-amber-500 font-mono'>MENÜ</strong>
            <div className='flex xl:min-w-32 justify-between items-center p-2 hover:text-amber-500 hover:cursor-pointer'>
                <i className='hidden xl: lg:flex md:flex'>heabım</i>
                <CgProfile className='text-2xl' />
            </div>

            <div className='flex justify-between items-center p-2 hover:text-amber-500 hover:cursor-pointer'>
                <i className='hidden xl:flex lg:flex md:flex'>mesajlarım</i>
                <AiFillMessage className='text-2xl' />
            </div>

            <div className='flex justify-between items-center p-2 hover:text-amber-500 hover:cursor-pointer'>
                <i className='hidden xl:flex lg:flex md:flex'>paylaş</i>
                <HiOutlinePaperClip className='text-2xl' />
            </div>

            <div className='flex justify-between items-center p-2 hover:text-amber-500 hover:cursor-pointer'>
                <i className='hidden xl:blcok lg:block md:block'>ayarlar</i>
                <HiOutlineAdjustments className='text-2xl' />
            </div>


        </div>
    </div>
  )
}

export default Menu