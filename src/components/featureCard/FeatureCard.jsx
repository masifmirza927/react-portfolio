import React from 'react'
import { FaRegCircleUser } from "react-icons/fa6";


const FeatureCard = () => {

  const cards = [
    {
      id:1,
      icon: <FaRegCircleUser />,
      heading: "Business Strategy",
      content: "I throw myself down among the tall grass by the stream as I lie close to the earth."
    },
    {
      id:1,
      icon: <FaRegCircleUser />,
      heading: "Business Strategy",
      content: "I throw myself down among the tall grass by the stream as I lie close to the earth."
    }
  ]

  return (
    <div className='grid grid-cols-3'>
      {
        cards.map( item => {
            return <div key={item.id}>
              {item.icon}
              <h3>{item.heading}</h3>
              <p>{item.content}</p>
            </div>
        })
      }
    </div>
  )
}

export default FeatureCard