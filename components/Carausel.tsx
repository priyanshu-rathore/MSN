import Image from 'next/image'
import React, { useState } from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useRouter } from 'next/navigation';


const Carausel = () => {

    const router = useRouter()

    const [count,setCount] = useState(0)

    const next = () => {
        setCount(prev => prev < 16 ? prev + 1 : 0)
    }

    const prev = () => {
        setCount(pr => pr > 0 ? pr -1 : 16 )
    }

  return (
    <div className='w-[628px] h-[372px] mb-20'>
      {
        newsDescriptions.map((item,i)=>{
            if(count == i){
                return (
                    <div key={i} className='relative cursor-pointer rounded-md w-[628px] h-[372px]'>
                    <Image onClick={()=>router.push(item.replace(" ","-"))}  width={628} height={372} className='absolute rounded-lg z-[1]' src={`https://picsum.photos/seed/${item}/700/450`} alt={item}/>
                    <div className='w-full flex justify-between top-[50%] bottom-[50%] absolute z-[2]'>
                    <div onClick={prev} className='py-5 px-0.5 flex justify-center items-center bg-white/20 hover:bg-white cursor-pointer'>
                    <KeyboardArrowLeftIcon className='text-gray-800' />
                    </div>
                    <div onClick={next} className='py-5 px-0.5 flex justify-center items-center bg-white/20 hover:bg-white cursor-pointer'>
                    <KeyboardArrowRightIcon className='text-gray-800'/>
                    </div>
                    </div>
                    <p onClick={()=>router.push(item.replace(" ","-"))}  className='absolute z-[2] hover:underline cursor-pointer bottom-0  font-bold text-lg text-white px-2'>{item}</p>
                    </div>
                )
            }
           
        })
      }
    </div>
  )
}

export default Carausel


const newsDescriptions = [
    'The latest updates on global events.',
    'Insights into political developments and policies.',
    'News and updates from the business world.',
    'Innovations and advancements in technology.',
    'Highlights from the world of entertainment.',
    'Scores, highlights, and analysis from the sports arena.',
    'Updates on health trends and medical breakthroughs.',
    'Discoveries and news from the world of science.',
    'Environmental news and sustainability updates.',
    'International news and global perspectives.',
    'Local news and community updates.',
    'Editorial pieces and commentary.',
    'Financial news and market updates.',
    'Travel tips, destinations, and news.',
    'Cultural events, trends, and news.',
    'Education updates and insights.',
    'Weather forecasts and climate news.',
  ];