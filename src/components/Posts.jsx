import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import Post from './Post';

function Posts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data.posts));
    },[])
    console.log(posts)
  return (
    <div>
        <div className='p-5'>
            {
                posts.map((dt,i) => (
                    <Post id={dt.id} title={dt.title} body={dt.body} userid={dt.userid} tags={dt.tags} views={dt.views} reactions={dt.reactions} dtkey={i}/>
                ))
            }
        </div>
    </div>
  )
}

export default Posts