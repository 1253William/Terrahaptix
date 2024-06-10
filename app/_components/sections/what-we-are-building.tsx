import Image from "next/image";
import Container from "../container";

import Img from "@/public/airplane-1.svg";
import { Explore } from "../explore";

export const WhatWeAreBuilding = () => {
  return (
    <Container>
      <div className='min-h-screen p-4'>
        <section className='max-w-[900px]'>
          <h2 className='font-bold text-5xl lg:text-6xl'>
            What we are building
          </h2>
          <p className='lg:text-5xl text-2xl md:text-3xl py-4'>
            Our cutting-edge robotics solutions are engineered for a variety of
            applications, including civic, military, surveillance, and payload
            operations. Explore our innovative products below:
          </p>
        </section>
        <section className='flex flex-col md:flex-row gap-8'>
          <div className='hidden md:block md:w-1/4 h-full'>
            {/* replace this image */}
            <div className='w-full h-[250px] flex justify-end relative'>
              <Image src={Img} alt='' fill />
            </div>
          </div>
          <div className='md:w-3/4'>
            <Explore />
            <Explore />
          </div>
        </section>
        <section className=''>
          <h2 className='font-bold text-5xl lg:text-6xl my-3 lg:max-w-[55%]'>
            We are building solutions to problems
          </h2>
          <div className='relative w-full h-screen img'>
            <Image
              src='/replace-img.jpg'
              alt=''
              fill
              className='object-cover top-0 left-0 rounded-xl'
            />
            <p className='absolute flex items-end w-1/2 h-full text-white font-bold text-5xl p-4'>
              Reliable sensory feedback and intelligence
            </p>
          </div>
        </section>
      </div>
    </Container>
  );
};
