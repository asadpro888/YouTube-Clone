import React, { useState } from 'react';
import { FaYoutube } from 'react-icons/fa';
import { FaHouse } from 'react-icons/fa6';
import { FaSliders } from 'react-icons/fa6';
import { FaArrowRightFromBracket } from 'react-icons/fa6';
import { FaClockRotateLeft } from 'react-icons/fa6';
import { MdFeaturedPlayList } from 'react-icons/md';
import { FaClock } from 'react-icons/fa';
import { FaThumbsUp } from 'react-icons/fa';
import { FaFireFlameCurved } from 'react-icons/fa6';
import {FaMusic} from 'react-icons/fa6'
import {FaLifeRing} from 'react-icons/fa6'
import {FaGamepad} from 'react-icons/fa6'
import {FaNewspaper} from 'react-icons/fa6'
import { FaVolleyball } from 'react-icons/fa6';
import { FaLightbulb } from 'react-icons/fa';
import { FaShirt } from 'react-icons/fa6';
import {FaGear} from 'react-icons/fa6'
import { FaFlag } from 'react-icons/fa';
import { FaCircleInfo } from 'react-icons/fa6';
import { FaCommentDollar } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import Icon from '/favicon.ico'
import './index.css'

function MyComponent() {
  const [activeId, setActiveId] = useState(false);
  const handleClick = (itemId) => {
    setActiveId(itemId);
  };
  const backStyle = {
    backgroundColor: 'white',
    color: 'black',
    borderRadius: '7px',
  }
    return (
      <div className='bg-slate-950 w-[20%] p-5 h-[100vh] text-white overflow-auto shadow-xl'>
        <div className='flex flex-wrap justify-between items-center'>
          <div className='hover:bg-gray-600 hover:rounded-full transition p-2 py-2 text-center'>
          <FaBars className='ml-1 text-2xl'/>
          </div>
        <div className='flex flex-wrap justify-between'>
        <img src={Icon} className='mr-1 w-8' />
        <span className='text-2xl font-bold mr-4'>Youtube</span>
        </div>
        </div>
        <ul>
          
        <li
        onClick={() => handleClick(1)}
        className={`hover:bg-gray-600 hover:rounded p-2 font-bold flex flex-wrap items-center ${activeId === 1 ? backStyle : ''}`}
      >
        <FaHouse />
        <p className="ml-4">Home</p>
      </li>
      <li
        onClick={() => handleClick(2)}
        className={`hover:bg-gray-600 hover:rounded p-2 font-bold flex flex-wrap items-center ${
          activeId === 2 ? backStyle : 'null'
        }`}
      >
        <FaYoutube />
        <p className="ml-4">Shorts</p>
      </li>
            <li className='hover:bg-gray-600 hover:rounded p-2 font-bold flex flex-wrap items-center mb-2'><FaSliders/> <p className="ml-4">Subscribtions</p></li>
            <hr />
            <li className='hover:bg-gray-600 hover:rounded p-2 font-bold flex flex-wrap items-center mt-2'>You <FaArrowRightFromBracket className='ml-4'/></li>
            <li className='hover:bg-gray-600 hover:rounded p-2 font-bold flex flex-wrap items-center'><FaClockRotateLeft/> <p className='ml-4'>History</p></li>
            <li className='hover:bg-gray-600 hover:rounded p-2 font-bold flex flex-wrap items-center'><MdFeaturedPlayList/> <p className='ml-4'>Playlist</p> </li>
            <li className='hover:bg-gray-600 hover:rounded p-2 font-bold flex flex-wrap items-center'><FaClock/> <p className='ml-4'>Watch Later</p> </li>
            <li className='hover:bg-gray-600 hover:rounded p-2 font-bold flex flex-wrap items-center mb-2'><FaThumbsUp/> <p className='ml-4'> Liked Videos</p></li>
            <hr />
            <li className='hover:bg-gray-600 hover:rounded p-2 font-bold mt-2 mb-2'>Subscribed: None</li>
            <hr />
            <li className='hover:bg-gray-600 hover:rounded p-2 font-bold mt-2'>Explore</li>
            <li className='hover:bg-gray-600 hover:rounded p-2 font-bold flex flex-wrap items-center'><FaFireFlameCurved/><p className='ml-4'>Trends</p></li>
            <li className='hover:bg-gray-600 hover:rounded p-2 font-bold flex flex-wrap items-center'><FaMusic/><p className='ml-4'>Music</p> </li>
            <li className='hover:bg-gray-600 hover:rounded p-2 font-bold flex flex-wrap items-center'><FaLifeRing/><p className='ml-4'>Live</p></li>
            <li className='hover:bg-gray-600 hover:rounded p-2 font-bold flex flex-wrap items-center'><FaGamepad/> <p className='ml-4'>Gameing</p></li>
            <li className='hover:bg-gray-600 hover:rounded p-2 font-bold flex flex-wrap items-center'><FaNewspaper/> <p className='ml-4'>News</p></li>
            <li className='hover:bg-gray-600 hover:rounded p-2 font-bold flex flex-wrap items-center'><FaVolleyball/> <p className='ml-4'>Sport</p></li>
            <li className='hover:bg-gray-600 hover:rounded p-2 font-bold flex flex-wrap items-center'><FaLightbulb/> <p className='ml-4'>Learning</p></li>
            <li className='hover:bg-gray-600 hover:rounded p-2 font-bold flex flex-wrap items-center mb-2'><FaShirt/> <p className='ml-4'>Fashion & Beauty</p></li>
            <hr />
            <li className='font-bold mt-2'>More From YouTube</li>
            <li className='flex flex-wrap items-center mb-2 hover:bg-gray-600 hover:rounded p-2'><img src={Icon} /> <p className='font-bold ml-4'>Youtube Kids</p> </li>
            <hr />
            <li className='flex flex-wrap items-center mb-2 hover:bg-gray-600 hover:rounded p-2'><FaGear/> <p className='ml-4'>Setting</p></li>
            <li className='flex flex-wrap items-center mb-2 hover:bg-gray-600 hover:rounded p-2'><FaFlag/> <p className='ml-4'>Report History</p> </li>
            <li className='flex flex-wrap items-center mb-2 hover:bg-gray-600 hover:rounded p-2'><FaCircleInfo/> <p className='ml-4'>Help</p></li>
            <li className='flex flex-wrap items-center mb-2 hover:bg-gray-600 hover:rounded p-2'><FaCommentDollar/> <p className='ml-4'>Send</p> Feedback</li>
            <hr />
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore officiis aperiam eveniet nobis dignissimos.</li>
            <br />
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, illo.</li>
        </ul>
      </div>
      
    );
  }
export default MyComponent  