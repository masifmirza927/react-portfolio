import React from 'react'

const Navbar = () => {
  const NavItems = [
    {
      id: 1,
      title: "Home",
      section: "#home"
    },
    {
      id: 2,
      title: "Features",
      section: "#features"
    },
    {
      id: 3,
      title: "Portfolio",
      section: "#portfolio"
    },
    {
      id: 4,
      title: "Facts",
      section: "#facts"
    },
    {
      id: 5,
      title: "Our Team",
      section: "#team"
    },
    {
      id: 6,
      title: "Testimonials",
      section: "#testimonials"
    },
    {
      id: 7,
      title: "News",
      section: "#news"
    },
    {
      id: 8,
      title: "Clients",
      section: "#clients"
    },
  ]
  return (
    <>
      <div className='flex justify-between'>
        <div className='text-white'>
          logo
        </div>
        <div className=''>
          {
            NavItems.map((item) => {
              return <a href={item.section} className='text-white p-3 px-5 hover:text-red-600 font-bold text-lg  inline-block'> {item.title} </a>
            })
          }
        </div>

      </div>


    </>
  )
}

export default Navbar