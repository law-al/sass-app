import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Navitems from './nav-items';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link href='/'>
        <div className='flex items-center gap-2'>
          <Image
            src='/images/logo.svg'
            alt='logo'
            width={100}
            height={100}
            className='w-10 h-10'
          />
          <h1 className='text-2xl font-bold'>Converso</h1>
        </div>
      </Link>

      <Navitems />
    </nav>
  );
};

export default Navbar;
