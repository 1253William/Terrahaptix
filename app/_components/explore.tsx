import Image from "next/image";

export const Explore = () => {
  return (
    <div className='flex flex-col md:flex-row gap-3 border-y border-black -mr-4 py-4 '>
      <div className='md:w-1/2 h-[300px] relative'>
        <Image
          src='/replace-img.jpg'
          alt=''
          fill
          className='object-cover rounded-xl'
        />
      </div>
      <div className='md:w-1/2 flex flex-col justify-between'>
        <h3 className='font-bold text-3xl'>Archer</h3>
        <p className='text-2xl'>
          At Terrahaptix, our mission is to revolutionize the capabilities of
          autonomous robots. We aim to empower these systems to handle complex
          and demanding scenarios with unmatched efficiency.
        </p>
        <div className='flex flex-wrap gap-4'>
          <span className='bg-[#1b1b1b] py-3 px-6 rounded-[30px] text-[#eeeded]'>
            Drone technology
          </span>
          <span className='bg-[#1b1b1b] py-3 px-6 rounded-[30px] text-[#eeeded]'>
            Surveillance
          </span>
          <span className='bg-[#1b1b1b] py-3 px-6 rounded-[30px] text-[#eeeded]'>
            Monitoring
          </span>
        </div>
      </div>
    </div>
  );
};
