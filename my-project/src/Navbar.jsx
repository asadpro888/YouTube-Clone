import React from 'react'
import './index.css'
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { FaMicrophone } from 'react-icons/fa';
import { FaVideo } from 'react-icons/fa';
import { FaBell } from 'react-icons/fa';
import Avatar from '/avataaars (1).png'

const Navbar = () => {
  return (
    <nav className='fixed  w-[100%] navbar'>
    <div className='flex flex-wrap items-center text-white'>
        <input type="search" 
      placeholder='Search'
      className='input outline-none p-2 w-[500px] ml-2'
      />
      <button className='bttn'><FaMagnifyingGlass className='text-black'/></button>
          <FaMicrophone className='icon'/>
          <FaVideo className='icon'/>
          <FaBell className='icon'/>
          <img src={Avatar} alt="avatar" className='w-[50px] h-[50px] ml-[250px]' />
        
        </div>
        
    </nav>
    
  )
}

export default Navbar
