'use client'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React, { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

const Page = () => {
    const [dataSource,setDataSource] = useState(Array.from({length:20}))
    const [hasMore,setHasMore] = useState(true)
    const fetchMoredata = () => {
        setTimeout(()=>{
            setDataSource(dataSource.concat(Array.from({length:20})))
        },1000)
    }

  return (
    <div className="flex justify-center">
    <div className="bg-white w-[1600px] shadow-xl h-full ">
     <Navbar/>
    <InfiniteScroll hasMore={hasMore} loader={<p className='text-black'>Loading...</p>}  dataLength={dataSource.length} next={fetchMoredata}>
       <div className='flex flex-wrap gap-5 mt-5 justify-evenly '>
       {
            dataSource.map((item,index)=>{
                return (
                    <div key={index} className='relative w-[500px] rounded-lg overflow-hidden shadow-2xl h-[500px]'>

                    <Image alt='img' className='absolute z-[1]' width={500} height={500} src={`https://picsum.photos/seed/${index+1}/500`} />
                    <p className='absolute z-[1] p-3 cursor-pointer hover:underline bg-white bottom-0'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, officiis! Consequuntur do</p>
                    </div>
                )
            })
        }
       </div>
    </InfiniteScroll>
    </div>
    </div>
  )
}

export default Page
