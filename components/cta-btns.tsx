import { cn } from '@/lib/utils';
import Button from './ui/button';

export default function CtaBtns({ center }: { center?: boolean }) {
  return (
    <>
      <div className={cn('flex gap-4 mt-5', { 'justify-center': center })}>
        <Button white>explore now</Button>
        <Button outline>Learn more</Button>
      </div>
    </>
  );
}
