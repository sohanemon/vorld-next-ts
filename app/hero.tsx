import ArrowDown from '@/components/arrow-down';
import Button from '@/components/ui/button';
import Heading from '@/components/ui/heading';
import Text from '@/components/ui/text';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className='min-h-screen mt-20 box-full'>
      <div className='flex items-center justify-between'>
        <div className='flex flex-col items-center max-w-[200px] text-center'>
          <Image
            src={'/images/one.svg'}
            alt='one logo'
            width={110}
            height={40}
          />
          <Text sm>One Account for all your web3 needs.</Text>
        </div>
        <div className='flex flex-col items-center max-w-[200px] text-center'>
          <Image
            src={'/images/launcher.svg'}
            alt='launcher logo'
            width={165}
            height={26}
          />
          <Text sm>One Account for all your web3 needs.</Text>
        </div>
      </div>
      <ActualHero />
    </section>
  );
}

const ActualHero = () => {
  return (
    <div className='relative flex justify-between'>
      <div className='flex flex-col items-center'>
        <Image
          src={'/images/phone.svg'}
          alt='launcher logo'
          width={210}
          className='grow'
          height={400}
        />
        <ArrowDown />
      </div>
      <div className='flex flex-col items-center self-center'>
        <Heading>odyssey</Heading>
        <Text className='mb-2 -mt-4'>the game</Text>
        <Button gold>No more</Button>
      </div>
      <div className='flex flex-col items-center'>
        <Image
          src={'/images/gamepad.svg'}
          alt='gamepad logo'
          width={320}
          className='grow'
          height={370}
        />
        <ArrowDown />
      </div>
      <Robots />
    </div>
  );
};

const Robots = () => {
  return (
    <div className='absolute inset-0 flex justify-center '>
      <Image
        src={'/images/red-side.svg'}
        alt='gamepad logo'
        width={300}
        className=''
        height={541}
      />
      <Image
        src={'/images/black-side.svg'}
        alt='gamepad logo'
        width={300}
        className=''
        height={541}
      />
    </div>
  );
};
