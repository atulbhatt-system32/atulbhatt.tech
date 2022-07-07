import React from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import DarkMode from '../DarkMode'

export default function Header() {
  return (
    <div className='flex justify-between p-4'>
    <div className='font-semibold flex text-24'>Logo</div>
    <div className='flex'>
    <DarkMode/>
        <AiOutlineMenu className="text-primary-blue-600 ml-4"/>
    </div>
    </div>
  )
}
