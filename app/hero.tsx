import ArrowDown from '@/components/arrow-down';
import Text from '@/components/ui/text';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className='min-h-screen box-full'>
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
    <div className='flex items-center justify-between'>
      <div>
        <Image
          src={'/images/phone.svg'}
          alt='launcher logo'
          width={210}
          height={400}
        />
        <ArrowDown />
      </div>
    </div>
  );
};
