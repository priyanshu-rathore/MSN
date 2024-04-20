import React from 'react'
import Carausel from './Carausel'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const News = () => {
  return (
    <div className='px-20 mt-5  gap-10'>
      <div className='flex justify-between'>
      <Carausel/>
      <div className='flex flex-col ' >
      <NewsPrimaryComponent id={1}/>
      <NewsSecondayComponent text={newsDescriptions[0]} id={247}/>
      </div>
      </div>
     <div className='flex flex-wrap gap-5 justify-between'>
      {
        [1,2,3,4,5,6,7,8,9].map((item,i)=>{
          return (
            <NewsSecondayComponent key={i} id={item} text={newsDescriptions[i]} />
          )
        })
      }
     </div>
    </div>
  )
}

export default News

export const newsDescriptions = [
    'Insights into political developments and policies.',
    'News and updates from the business world.',
    'The latest updates on global events.',
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

  const NewsPrimaryComponent = ({id}:{id:number}) => {
    return (
        <div className='h-fit  w-[306px] relative'>
            <Image width={306} className='rounded-lg object-cover absolute z-[1] block ' height={256} src={`https://picsum.photos/id/${id}/256`}  alt='img' />
            <p className='absolute z-[1] text-white font-bold p-2 hover:underline top-48'>{newsDescriptions[1]}</p>
        </div>
    )
  }

 export const NewsSecondayComponent = ({id,text}:{id:number,text:string}) => {
  const router = useRouter()
    return (
      <div className='w-[306px] flex-grow-0 rounded-lg overflow-hidden flex h-[104px] shadow-lg items-center justify-between gap-x-2'>
        <Image width={104} height={104} className='  rounded-l-lg' src={`https://picsum.photos/id/${id}/104`} alt='img'/>
        <div>
          <p onClick={()=>router.push(text.replace(" ","-"))} className='hover:underline cursor-pointer'>{text}</p>
        </div>
      </div>
    )
  }