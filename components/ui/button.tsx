import { cn } from '@/lib/utils';
import { HtmlHTMLAttributes } from 'react';

interface CompType {
  gold?: boolean;
  outline?: boolean;
  white?: boolean;
}

export default function Button({
  className,
  white,
  outline,
  gold,
  ...props
}: HtmlHTMLAttributes<HTMLButtonElement> & CompType) {
  return (
    <button
      {...props}
      className={cn(
        'h-9  rounded-full px-4 text-black font-bicubik',
        {
          'h-7 bg-amber-500': gold,
          'bg-white': white,
          'bg-black text-white border-white border': outline,
        },
        className
      )}
    />
  );
}
<div className='' />;
