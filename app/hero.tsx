import ArrowDown from '@/components/arrow-down';
import CtaBtns from '@/components/cta-btns';
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
      <SecondHero />
    </section>
  );
}

const ActualHero = () => {
  return (
    <div className='relative grid justify-between grid-cols-3 '>
      <div className='flex flex-col '>
        <Image
          src={'/images/phone.svg'}
          alt='launcher logo'
          width={210}
          className='grow'
          height={400}
        />
        <div className='ml-[31%]'>
          <ArrowDown />
        </div>
      </div>
      <div className='flex flex-col items-center self-center'>
        <Heading>odyssey</Heading>
        <Text className='mb-4 '>the game</Text>
        <Button gold>No more</Button>
      </div>
      <div className='flex flex-col '>
        <Image
          src={'/images/gamepad.svg'}
          alt='gamepad logo'
          width={320}
          className='grow'
          height={370}
        />
        <div className='ml-[62%]'>
          <ArrowDown />
        </div>
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

export const SecondHero = () => {
  return (
    <div className='relative min-h-screen '>
      <Image
        src={'/images/cloud/cloud-hero.svg'}
        alt='cloud'
        width={900}
        className='!duration-[3000ms] absolute inset-0 m-auto transition-all '
        height={541}
      />
      <Image
        src={'/images/black.svg'}
        alt='black'
        width={500}
        className='absolute inset-0 m-auto mt-20 '
        height={529}
      />
      <div className='absolute inset-0 w-full m-auto bg-gradient-to-t from-black to-black/50 h-1/2' />
      <div className='absolute inset-x-0 flex flex-col justify-center mx-auto bottom-24'>
        <Heading>odyssey</Heading>
        <Text className='max-w-xl mx-auto text-xs leading-5 text-center text-white/50'>
          Welcome to the thrilling world of &apos;ODYSSEY&apos;! Embark on a
          daring adventure filled with danger, mystery, and epic battles.
          Immerse yourself in a captivating storyline as you journey through
          stunning landscapes and encounter fascinating characters.
        </Text>
        <CtaBtns center />
      </div>
    </div>
  );
};
