'use client'

import { Theme } from "@/libs/theme"
import Image from "next/image"
import Link from "next/link"
import React from "react"

const NavBar = () => {
  return (
    <div className='navbar bg-base-100'>
      <div className='flex-1'>
        <Link href={'/'} className='text-xl'>Lesson - 03</Link>
      </div>
      <div className='flex-none gap-2'>
        <div className='form-control'>
          <input
            type='text'
            placeholder='Search'
            className='input input-bordered w-24 md:w-auto'
          />
        </div>
        <div className='dropdown dropdown-end'>
          <div
            tabIndex={0}
            role='button'
            className='btn btn-ghost btn-circle avatar'>
            <div className='w-10 rounded-full'>
              <Image
                alt='Tailwind CSS Navbar component'
                src={'/free-photo-of-ao-dai.jpeg'}
                width={100}
                height={100}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow'>
            <li>
              <Link href={'/profile'} className='justify-between'>
                Profile
                <span className='badge'>New</span>
              </Link>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
      <label className='grid cursor-pointer place-items-center'>
        <input
          type='checkbox'
          value={Theme.synthwave}
          placeholder="checkbox"
          className='toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1'
        />
        <svg
          className='stroke-base-100 fill-base-100 col-start-1 row-start-1'
          xmlns='http://www.w3.org/2000/svg'
          width='14'
          height='14'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'>
          <circle
            cx='12'
            cy='12'
            r='5'
          />
          <path d='M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4' />
        </svg>
        <svg
          className='stroke-base-100 fill-base-100 col-start-2 row-start-1'
          xmlns='http://www.w3.org/2000/svg'
          width='14'
          height='14'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'>
          <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path>
        </svg>
      </label>
    </div>
  )
}

export default NavBar
