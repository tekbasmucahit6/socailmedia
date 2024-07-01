import React from 'react'
import { FcLike } from "react-icons/fc";
import { FcDislike } from "react-icons/fc";
import { FaEye } from "react-icons/fa";
function Post( {id,title,body,userid,tags,reactions,views,dtkey} ) {
  return (
    <div className='grid  items-center  border-blue-950 mt-16 mb-10 rounded-b-2xl' key={dtkey}>
        <div className='bg-blue-950 p-3 text-white text-center'>
            <strong>{title}</strong>
        </div>
        <div className='mt-10 text-center p-3'>
            <i>{body}</i>
        </div>
        <div className='grid grid-cols-3 justify-center items-center mt-10 gap-10'>
            <div className='grid justify-center items-center text-center'>
                <b><FcLike className='text-2xl' /></b>
                <b>{reactions.likes}</b>
            </div>

            <div className='grid justify-center items-center text-center'>
                <b><FcDislike className='text-2xl' /></b>
                <b>{reactions.dislikes}</b>
            </div>

            <div className='grid justify-center items-center text-center'>
                <b><FaEye className='text-2xl' /></b>
                <b>{views}</b>
            </div>
                
           
        </div>
    </div>
  )
}

export default Post