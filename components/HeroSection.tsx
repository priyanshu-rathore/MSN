'use client'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const HeroSection = () => {
    const router = useRouter()
    const [locationData,setLocationData] = useState({city:'',temp:''})

    const getPos = async (pos:any) => {
      const {coords} = pos
      
      const options = {
        method: 'GET',
        url: 'https://yahoo-weather5.p.rapidapi.com/weather',
        params: {
          lat: coords.latitude,
          long: coords.longitude,
          format: 'json',
          u: 'f'
        },
        headers: {
          'X-RapidAPI-Key': '61164462cfmsh90eecee3c12ef03p1b9195jsnb432400238ff',
          'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
        }
      };
      
      try {
        const response = await axios.request(options);
       
        setLocationData({city:response.data?.location?.city,temp:response.data?.current_observation?.condition?.temperature})
      } catch (error) {
        console.error(error);
      }
    }

    useEffect(()=>{
      navigator.geolocation.getCurrentPosition(getPos)
    },[])

  return (
    <div>
       <div className='flex gap-x-10 text-gray-800  text-xs px-20 mt-10'>
        <h1 onClick={()=>router.push('/cricket-wc')} className='cursor-pointer hover:underline'>Cricket WC</h1>
        <p>|</p>
        {
          locationData.city.length ?  <p>{locationData.city} / {locationData.temp}°C</p> : ''
        }
        <h1 onClick={()=>router.push('/')} className='cursor-pointer hover:underline hover:text-black'>NEWS</h1>
        <h1 onClick={()=>router.push('/entertainment')} className='cursor-pointer hover:underline hover:text-black'>ENTERTAINMENT</h1>
        <h1 onClick={()=>router.push('/sports')} className='cursor-pointer hover:underline hover:text-black'>SPORTS</h1>
        <h1 onClick={()=>router.push('/gaming')} className='cursor-pointer hover:underline hover:text-black'>GAMING</h1>
        <h1 onClick={()=>router.push('/money')} className='cursor-pointer hover:underline hover:text-black'>MONEY</h1>
        <h1 onClick={()=>router.push('/lifestyle')} className='cursor-pointer hover:underline hover:text-black'>LIFESTYLE</h1>
        <h1 onClick={()=>router.push('/health')} className='cursor-pointer hover:underline hover:text-black'>HEALTH</h1>
        <h1 onClick={()=>router.push('/food')} className='cursor-pointer hover:underline hover:text-black'>FOOD</h1>
        <h1 onClick={()=>router.push('/travel')} className='cursor-pointer hover:underline hover:text-black'>TRAVEL</h1>
        <h1 onClick={()=>router.push('/autos')} className='cursor-pointer hover:underline hover:text-black'>AUTOS</h1>
       </div>
    </div>
  )
}

export default HeroSection
