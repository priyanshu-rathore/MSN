import React from 'react'
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { NewsSecondayComponent, newsDescriptions } from './News';
import Image from 'next/image';
import { useRouter } from 'next/navigation';


const Sports = () => {
  const router = useRouter()
  return (
    <div>
       <div className="px-20 text-black my-12">
      <div className="flex gap-x-5 items-center">
        <div className="text-black cursor-pointer font-bold flex items-center gap-x-2">
          <h1 onClick={()=>router.push('/entertainment')} >Entertainment</h1>
          <KeyboardArrowRightIcon />
        </div>
        <h1 onClick={()=>router.push('/online-games')} className="text-sm cursor-pointer hover:text-black hover:underline text-gray-500">ONLINE GAMES</h1>
        <h1 onClick={()=>router.push('/gaming-news')} className="text-sm cursor-pointer hover:text-black hover:underline text-gray-500">GAMING NEWS</h1>
      </div>
      <div className="mt-5">
        <div className="flex flex-wrap justify-between">
      
      <NewsTernaryComponent/>

        <div className="grid grid-cols-2 gap-x-10" >
        {
        [100,200,300,400,500,600].map((item,i)=>{
          return (
            <NewsSecondayComponent key={i} id={item} text={newsDescriptions[i]} />
          )
        })
      }
        </div>
        <NewsTernaryComponent/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Sports

const NewsTernaryComponent = () => {
  const router = useRouter()
  return (
    <div className='w-[306px] h-[300px] relative overflow-hidden shadow-2xl rounded-lg'>
      <Image className='absolute z-[1]' width={306} height={300} src={`https://picsum.photos/seed/300/200/300`} alt='img'  />
      <p onClick={()=>router.push('/entertainment')} className='absolute z-[1] hover:underline cursor-pointer bg-white bottom-0 p-1 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rationepvoluptatum quod neque quia</p>
    </div>
  )
}