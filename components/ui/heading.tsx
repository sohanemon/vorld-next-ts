import { cn } from '@/lib/utils';
import { HtmlHTMLAttributes } from 'react';

interface CompType {}

export default function Heading({
  className,
  ...props
}: HtmlHTMLAttributes<HTMLHeadingElement> & CompType) {
  return (
    <h1
      {...props}
      className={cn(
        'text-center text-white text-3xl font-bicubik tracking-wider font-bold uppercase ',
        {},
        className
      )}
    />
  );
}
