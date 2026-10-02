import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import userAvatar from '@/assets/user.png';
import { Button } from '@heroui/react';
import NavLink from './NavLink';

const Navbar = () => {
    return (
      <div className='container mx-auto mt-4'>
        <div className='flex justify-between items-center gap-4'>
            <div></div>
          <ul className='flex justify-between gap-5 text-gray-500 font-semibold'>
            <li>
              <NavLink href="/">Home</NavLink>
            </li>
            <li>
              <NavLink href="/about">About</NavLink>
            </li>
            <li>
              <NavLink href="/career">Career</NavLink>
            </li>
          </ul>
          <div className='flex justify-between items-center gap-4'>
            <Image src={userAvatar} alt="User Avatar" width={40} height={40} />
            <Button className='rounded-none text-xl bg-gray-800'><Link href="/login">Login</Link></Button>
          </div>
        </div>
      </div>
    );
};

export default Navbar;