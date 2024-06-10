import AnimatedLine from "../animated-line";
import Container from "../container";
import { korium } from "../fonts/font";
import AnimatedLogo from "../terrahaptix-logo-animation";

const HeroSection = () => {
  return (
    <Container>
      <div className='h-screen flex 2xl:pl-40 overflow-hidden'>
        <div className='w-[60%] h-full pt-24 flex justify-between flex-col mb-4 px-4'>
          <h1 className={`${korium.className} text-9xl`}>Terrahaptix</h1>
          <div className='flex gap-8 pr-8 items-center 2xl:items-end pb-8 flex-1 w-full'>
            <div className='w-1/2 h-full 2xl:h-1/2'>
              <AnimatedLogo />
            </div>
            <div className='w-1/2 h-full 2xl:h-1/2'>
              <AnimatedLogo />
            </div>
          </div>
        </div>
        <div className='w-[40%] overflow-hidden h-screen border-l border-black flex justify-evenly relative'>
          <AnimatedLine />
          <AnimatedLine />
          <AnimatedLine />
          <div className='absolute text-6xl inset-0 p-4 flex items-end'>
            <p>Accelerating autonomy for emerging markets.</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
