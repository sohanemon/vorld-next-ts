import { cn } from '@/lib/utils';
import { HtmlHTMLAttributes } from 'react';

interface CompType {
  gold?: boolean;
}

export default function Button({
  className,
  gold,
  ...props
}: HtmlHTMLAttributes<HTMLButtonElement> & CompType) {
  return (
    <button
      {...props}
      className={cn(
        'h-7  rounded-full px-4 text-black font-bicubik',
        { 'bg-amber-500': gold },
        className
      )}
    />
  );
}
<div className='' />;
