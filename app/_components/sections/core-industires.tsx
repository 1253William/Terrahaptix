import Container from "../container";
import CoreIndustryImage from "../core-industry-image";

const CoreIndusty = () => {
  return (
    <Container>
      <div className='p-4'>
        <h2 className='font-bold text-5xl lg:text-6xl mb-[302px]'>
          Core Industries
        </h2>
        <p>- A look at some industries we build for...</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6'>
          <CoreIndustryImage img='/replace-img.jpg' />
          <CoreIndustryImage img='/replace-img.jpg' />
          <CoreIndustryImage img='/replace-img.jpg' />
        </div>
      </div>
    </Container>
  );
};

export default CoreIndusty;
