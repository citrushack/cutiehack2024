
import CoolerMaster from '@/public/assets/sponsors_section/sponsors_coolermaster.svg'
import SponsorSmall from '@/public/assets/sponsors_section/SponsorSmall.svg'
import SponsorXS from '@/public/assets/sponsors_section/SponsorXS.svg'
import RingLeft from '@/public/assets/sponsors_section/ring_left.svg'
import RingRight from '@/public/assets/sponsors_section/ring_right.svg'

import Image from 'next/image';
const Sponsors = () => {
  return <div className="relative flex flex-col items-center justify-center px-[50px] sm:px-[107px] pb-[191px] bg-cutie-blue-300">

    <div className='absolute left-0 top-0 z-0' >
      <Image src={RingLeft} alt="Left Ring" className=" h-full w-full" />
    </div>

    <div className='absolute right-0 top-[150px] z-0' >
      <Image src={RingRight} alt="Right Ring" className=" h-full w-full" />
    </div>


    <div className="flex flex-wrap justify-center gap-x-[31px] gap-y-[20px] mt-[156px] z-10 w-full">
      <div className="w-[417px]">
        <Image src={CoolerMaster} alt="Cooler Master" className="w-full h-auto max-h-[466px] object-contain" />
      </div>
      <div className="w-[417px]">
        <Image src={CoolerMaster} alt="Cooler Master" className="w-full h-auto max-h-[466px] object-contain" />
      </div>
      <div className="w-[417px]">
        <Image src={CoolerMaster} alt="Cooler Master" className="w-full h-auto max-h-[466px] object-contain" />
      </div>
    </div>

    

    <div className="flex flex-wrap justify-center gap-x-[173px] gap-y-[20px] mt-[77px] z-10 w-full">
      <div className="w-[306px]">
        <Image src={SponsorSmall} alt="Small Sponsor" className="w-full h-auto max-h-[347px] object-contain" />
      </div>
      <div className="w-[306px]">
        <Image src={SponsorSmall} alt="Small Sponsor" className="w-full h-auto max-h-[347px] object-contain" />
      </div>
    </div>

    <div className="flex flex-wrap justify-center gap-x-[173px] gap-y-[20px] mt-[23px] z-10 w-full">
      <div className="w-[190px] ">
        <Image src={SponsorXS} alt="XS Sponsor" className="w-full h-auto max-h-[255px] object-contain" />
      </div>
    </div>


  </div>;
};

export default Sponsors;
