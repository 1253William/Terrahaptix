import Image from "next/image";
import Container from "../container";

import Img from "../../../public/airplane-1.svg";

export const AboutUs = () => {
  return (
    <Container>
      <div className='flex flex-col md:flex-row h-fit md:h-screen'>
        <div className='md:w-1/4 p-4 flex flex-col h-full justify-between'>
          <h2 className='font-bold text-5xl lg:text-6xl'>About Us</h2>
          <div className='relative w-full h-[250px] hidden md:block'>
            <Image alt='' src={Img} fill />
          </div>
        </div>
        <div className='md:w-3/4 border-l border-black p-4'>
          <p className=' text-xl md:text-2xl lg:text-[30px] md:pt-8 md:pl-14'>
            <span className='font-bold'>Terrahaptix</span> is a cutting-edge
            robotics company that specializes in the development of advanced
            autonomous systems and platforms for civic, security, surveillance,
            and payload applications. Our mission is to enhance the capabilities
            of autonomous robots, enabling them to tackle complicated scenarios
            with exceptional precision, speed, and reliability.
          </p>
          <p className='text-sm md:text-xl'>
            At Terrahaptix, our mission is to revolutionize the capabilities of
            autonomous robots. We aim to empower these systems to handle complex
            and demanding scenarios with unmatched efficiency. Our cutting-edge
            technology is designed to enhance performance across various
            industries, providing robust solutions that meet the highest
            standards of precision and dependability.
          </p>
        </div>
      </div>
    </Container>
  );
};
