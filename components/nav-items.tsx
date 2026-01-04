'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navItems = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Companions',
    href: '/companions',
  },
  {
    label: 'My Journey',
    href: '/my-journey',
  },
  {
    label: 'Subscription',
    href: '/subscription',
  },
];

const Navitems = () => {
  const pathname = usePathname();

  return (
    <div className='flex items-center gap-4'>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            'font-medium',
            pathname === item.href ? 'text-primary font-bold' : 'text-gray-500'
          )}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default Navitems;
