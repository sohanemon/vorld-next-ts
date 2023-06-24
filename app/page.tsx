import Cta from './cta';
import Hero from './hero';

export default function Home() {
  return (
    <main>
      <Hero />
      <Cta
        desc='our revolutionary web3 wallet — your gateway to the decentralized world of blockchain! Say goodbye to the hassle of managing multiple accounts and welcome the simplicity of One Account for all your web3 needs.'
        icon='/images/one.svg'
        image='/images/phone.svg'
      />
    </main>
  );
}
