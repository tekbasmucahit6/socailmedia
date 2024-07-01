import React from 'react'
import Header from '../components/Header'
import Posts from '../components/Posts'
import Menu from '../components/Menu'

function Main() {
  return (
    <div>
        <Header />
        <div className='grid  xl:grid-flow-col-dense lg:grid-flow-col-dense xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3'>
            <div className='xl:col-span-2 lg:col-span-2 md:col-span-2'>
                <Posts />
            </div>
            <div className='xl:col-span-1 lg:col-span-1 md:col-span-1 mt-2'>
                <Menu />
            </div>
        </div>
    </div>
  )
}

export default Main