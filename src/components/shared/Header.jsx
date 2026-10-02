import React from 'react';
import logo from '@/assets/logo.png';
import Image from 'next/image';
import { format } from 'date-fns';

const Header = () => {
    return (
      <div className="text-center py-10 space-y-5">
        <Image
          src={logo}
          width={300}
          height={200}
          alt="Dragon News logo"
          className="mx-auto"
        />
        <p>Journalism Without Fear or Favour</p>
        <p>{format(new Date(), "EEEE, MMMM dd, yyy")}</p>
      </div>
    );
};

export default Header;