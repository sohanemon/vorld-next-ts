import CtaBtns from '@/components/cta-btns';
import Text from '@/components/ui/text';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { HtmlHTMLAttributes } from 'react';

interface CompType {
  rtl?: boolean;
  icon: string;
  desc: string;
  image: string;
}

export default function Cta({
  rtl,
  icon,
  desc,
  image,
  className,
  ...props
}: HtmlHTMLAttributes<HTMLDivElement> & CompType) {
  return (
    <div
      {...props}
      className={cn(
        'grid grid-cols-1  py-20 items-center md:grid-cols-2 box-full',
        {},
        className
      )}
    >
      <div className='flex flex-col items-start'>
        <Image
          src={icon}
          width={400}
          height={80}
          alt='icon'
          className='h-14 w-max'
        />
        <Text className='my-6 text-sm'>{desc}</Text>
        <CtaBtns />
      </div>
      <div className='relative'>
        <Image
          src={image}
          width={400}
          height={700}
          alt='icon'
          className='mx-auto w-60'
        />
        <Image
          src={'/images/cloud/cloud-3.svg'}
          alt='cloud'
          className='absolute inset-0 -z-10'
          width={400}
          height={400}
        />
      </div>
    </div>
  );
}
