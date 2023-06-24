import Image from 'next/image';

export default function ArrowDown() {
  return (
    <>
      <Image
        src={'/images/down-arrow-sky.svg'}
        alt='launcher logo'
        width={24}
        height={13}
        className='duration-500  animate-bounce'
      />
    </>
  );
}
