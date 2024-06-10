import Image from "next/image";

const CoreIndustryImage = ({ img }: { img: string }) => {
  return (
    <div className='relative w-full h-[368px] lg:h-[550px]'>
      <Image src={img} alt='' fill className='object-cover rounded-xl' />
    </div>
  );
};

export default CoreIndustryImage;
