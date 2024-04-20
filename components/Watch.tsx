import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { NewsSecondayComponent, newsDescriptions } from "./News";
import { useRouter } from "next/navigation";

const Watch = () => {
  const router = useRouter()
  return (
    <div className="px-20 text-black my-12">
      <div className="flex gap-x-5 items-center">
        <div className="text-black cursor-pointer font-bold flex items-center gap-x-2">
          <h1 onClick={()=>router.push('/watch')}>Watch </h1>
          <KeyboardArrowRightIcon />
        </div>
        <h1 onClick={()=>router.push('/for-you')} className="text-sm cursor-pointer hover:text-black hover:underline text-gray-500">FOR YOU</h1>
        <h1 onClick={()=>router.push('/viral')} className="text-sm cursor-pointer hover:text-black hover:underline text-gray-500">VIRAL</h1>
      </div>
      <div className="mt-5">
        <div className="flex justify-between">
          <iframe className="w-[560px]"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/nIHyr_fp_yI?si=YwDOxvuAvB_c0Qaq&autoplay=1&mute=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            
          ></iframe>
        <div className="grid grid-cols-2 gap-x-10" >
        {
        [100,200,300,400,500,600].map((item,i)=>{
          return (
            <NewsSecondayComponent key={i} id={item} text={newsDescriptions[i]} />
          )
        })
      }
        </div>
        </div>
      </div>
    </div>
  );
};

export default Watch;
