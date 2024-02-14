import React, { useState, useEffect } from 'react';
import { BsSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import { Button, Drawer } from 'antd';
import { RxHamburgerMenu } from "react-icons/rx";
import { SiSitepoint } from "react-icons/si";


const Navbar = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(null);
  const [open, setOpen] = useState(false);

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

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    let isDark = localStorage.getItem("isDark");
    if (isDark == 'true') {
      document.documentElement.classList.add('dark');
      setIsDarkTheme("true");
    }
  }, [])


  const toggleDarkMode = () => {
    let isDark = localStorage.getItem("isDark");
    if (isDark == null || isDark == 'false') {
      localStorage.setItem('isDark', true);
      document.documentElement.classList.add('dark');
      setIsDarkTheme("true");
    } else {
      localStorage.setItem('isDark', false);
      document.documentElement.classList.remove('dark');
      setIsDarkTheme(null);
    }
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer} className='text-2xl mt-2 md:hidden'>
        <RxHamburgerMenu />
      </Button>
      <div className='flex justify-between'>
        <div className='text-white'>
          <SiSitepoint /> Asif Mirza
        </div>
        <div className='hidden md:block'>
          {
            NavItems.map((item) => {
              return <a href={item.section} className='text-white p-3 px-5 hover:text-red-600 font-bold text-lg  inline-block'> {item.title} </a>
            })
          }
        </div>

      </div>
      <button
        onClick={toggleDarkMode}
        className="px-4 py-2 rounded-md bg-gray-800 text-white"
      >
        {(isDarkTheme == "false" || isDarkTheme == null) ? <FaMoon /> : <BsSunFill />}
      </button>

      <Drawer title="Navbar" onClose={onClose} open={open} placement='left' >
        <div className=''>
          {
            NavItems.map((item) => {
              return <a href={item.section} className='text-black dark:text-white p-3 px-5 hover:text-red-600 font-bold text-lg block'> {item.title} </a>
            })
          }
        </div>
      </Drawer>
    </>
  )
}

export default Navbar