import React from 'react'

import { TbBusinessplan } from "react-icons/tb";
import { SlLayers } from "react-icons/sl";
import { PiUsersThree } from "react-icons/pi";
import { TbDeviceMobileUp } from "react-icons/tb";
import { FaRegChartBar } from "react-icons/fa6";
import { TbBrandWebflow } from "react-icons/tb";



const FeatureCard = () => {

  const cards = [
    {
      id:1,
      icon: <TbBusinessplan />,
      heading: "Business Strategy",
      content: "I throw myself down among the tall grass by the stream as I lie close to the earth."
    },
    {
      id:2,
      icon: <SlLayers />,
      heading: "Business Strategy",
      content: "I throw myself down among the tall grass by the stream as I lie close to the earth."
    },
    {
      id:3,
      icon: <PiUsersThree />,
      heading: "Marketing Strategy",
      content: "I throw myself down among the tall grass by the stream as I lie close to the earth."
    },
    {
      id:4,
      icon: <FaRegChartBar />,
      heading: "Marketing Research",
      content: "I throw myself down among the tall grass by the stream as I lie close to the earth."
    },
    {
      id:5,
      icon: <TbBrandWebflow />,
      heading: "Website Development",
      content: "I throw myself down among the tall grass by the stream as I lie close to the earth."
    },
    {
      id:6,
      icon: <TbDeviceMobileUp />,
      heading: "Mobile developmnet",
      content: "I throw myself down among the tall grass by the stream as I lie close to the earth."
    }
  ]

  return (
    <div className='grid grid-cols-1 px-3 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
      {
        cards.map( item => {
            return <div key={item.id} className='p-10 rounded-xl group dark:bg-gray-700  boxHoverGradient hover:text-white  hover:cursor-pointer bg-gray-100'>
              <p className='text-[60px] mb-4'>{item.icon}</p>
              <h3 className='text-2xl mb-4 font-bold'>{item.heading}</h3>
              <p className='text-xl text-gray-500 dark:text-white   group-hover:text-white '>{item.content}</p>
            </div>
        })
      }
    </div>
  )
}

export default FeatureCard