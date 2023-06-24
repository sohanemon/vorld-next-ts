import Button from './ui/button';

export default function CtaBtns() {
  return (
    <>
      <div className='flex justify-center gap-4 mt-5'>
        <Button white>explore now</Button>
        <Button outline>Learn more</Button>
      </div>
    </>
  );
}
