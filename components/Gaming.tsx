import React from 'react'
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { NewsSecondayComponent, newsDescriptions } from './News';
import Image from 'next/image';
import { useRouter } from 'next/navigation';


const Gaming = () => {
    const router = useRouter()
  return (
    <div>
       <div className="px-20 text-black my-12">
      <div className="flex gap-x-5 items-center">
        <div onClick={()=>router.push('/gaming')} className="text-black cursor-pointer font-bold flex items-center gap-x-2">
          <h1>Gaming</h1>
          <KeyboardArrowRightIcon />
        </div>
        <h1 onClick={()=>router.push('/league-of-legends')} className="text-sm cursor-pointer hover:text-black hover:underline text-gray-500">LEAGUE OF LEGENDS</h1>
        <h1 onClick={()=>router.push('/csgo')} className="text-sm cursor-pointer hover:text-black hover:underline text-gray-500">CS:GO</h1>
        <h1 onClick={()=>router.push('/dota')} className="text-sm cursor-pointer hover:text-black hover:underline text-gray-500">DOTA
        </h1>
        <h1 onClick={()=>router.push('/overwatch')} className="text-sm cursor-pointer hover:text-black hover:underline text-gray-500">OVERWATCH</h1>
        <h1 onClick={()=>router.push('/fortnite')} className="text-sm cursor-pointer hover:text-black hover:underline text-gray-500">FORTNITE</h1>
        <h1 onClick={()=>router.push('/call-of-duty')} className="text-sm cursor-pointer hover:text-black hover:underline text-gray-500">CALL OF DUTY</h1>
        <h1 onClick={()=>router.push('/rainbox-six')} className="text-sm cursor-pointer hover:text-black hover:underline text-gray-500">RAINBOX SIX</h1>






      </div>
      <div className="mt-5">
        <div className="flex flex-wrap justify-between">
      
      <NewsTernaryComponent/>

        <div className="grid grid-cols-2 gap-x-10" >
        {
        [115,225,335,441,575,665].map((item,i)=>{
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

export default Gaming

const NewsTernaryComponent = () => {
    const router = useRouter()
  return (
    <div className='w-[306px] h-[300px] relative overflow-hidden shadow-2xl rounded-lg'>
      <Image className='absolute z-[1]' width={306} height={300} src={`https://picsum.photos/seed/156/200/300`} alt='img'  />
      <p onClick={()=>router.push('/gaming')} className='absolute z-[1] hover:underline cursor-pointer bg-white bottom-0 p-1 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rationepvoluptatum quod neque quia</p>
    </div>
  )
}