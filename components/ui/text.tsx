import { cn } from '@/lib/utils';
import { HtmlHTMLAttributes } from 'react';

interface CompType {
  sm?: boolean;
}

export default function Text({
  className,
  sm,
  ...props
}: HtmlHTMLAttributes<HTMLParagraphElement> & CompType) {
  return (
    <p
      {...props}
      className={cn(
        'text-white/70 text-xl font-light uppercase leading-6',
        { 'text-sm': sm },
        className
      )}
    />
  );
}
