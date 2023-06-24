import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className='box'>
      <Image src={'/images/logo.svg'} alt='logo' width={149} height={38} />
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
