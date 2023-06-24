'use client';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className='flex items-center justify-between pt-3 shadow-2xl box-full shadow-theme-sky/10'>
      <Image
        src={'/images/logo.svg'}
        alt='logo'
        className='-mt-3'
        width={149}
        height={38}
      />
      <ul className='flex '>
        {navs.map((_) => (
          <Link
            href={`/${_}`}
            as={_ === 'home' ? '/' : _}
            key={_}
            className={cn('px-3 tracking-wide uppercase', {
              'border-b-[6px] border-theme-sky':
                pathname.includes(_) || (pathname === '/' && _ === 'home'),
            })}
          >
            {_}
          </Link>
        ))}
      </ul>
    </nav>
  );
}

const navs = [
  'home',
  'on3',
  'launch3r',
  'odyssey',
  'marketplace',
  'the casual hub',
];
