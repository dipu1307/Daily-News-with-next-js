"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import userAvatar from '@/assets/user.png';
import { Button, Spinner } from '@heroui/react';
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';

const Navbar = () => {

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  console.log(user,isPending);
    return (
      <div className="container mx-auto mt-4">
        <div className="flex justify-between items-center gap-4">
          <div></div>
          <ul className="flex justify-between gap-5 text-gray-500 font-semibold">
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
          {isPending ? (
            <div className="flex flex-col items-center gap-2">
              <Spinner size="xl" />
              <span className="text-xs text-muted">Extra Large</span>
            </div>
          ) : user ? (
            <div className="flex justify-between items-center gap-4">
              <h2>Hello {user.name}</h2>
              <Image
                src={user.image || userAvatar}
                alt="User Avatar"
                width={40}
                height={40}
              />
              <Button className="rounded-none text-xl bg-gray-800">
                <Link
                  href="/"
                  onClick={async () => await authClient.signOut()}
                >
                  Logout
                </Link>
              </Button>
            </div>
          ) : (
            <Button className="rounded-none text-xl bg-gray-800">
              <Link href="/login">Login</Link>
            </Button>
          )}
        </div>
      </div>
    );
};

export default Navbar;