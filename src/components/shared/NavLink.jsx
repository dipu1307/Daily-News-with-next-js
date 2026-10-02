'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ href, children}) => {
    const pathname = usePathname();
    // console.log(pathname, 'pathname');

    const isActive = pathname === href;

    return (
        <Link href={href} className={`${isActive ? 'text-blue-500 border-b-2 border-blue-500' : ''}`}>
            {children}
            
        </Link>
    );
};

export default NavLink;