import React from "react";

const Hero = () => {
  return (
    <section>
    <div className="md:px-20 px-4 md:pt-24 pt-10 font-Poppins">
      <div className="md:flex">
        <div className='md:w-[39%]' >
          <p className="md:text-[51px] text-[34px] font-bold md:leading-[88px]">
            Do More with<br className='md:block hidden' /> Xtrem<span className="text-primary">pay</span>
          </p>

          <p className='text-[13px] font-[400] leading-[27px] md:mt-4 mt-2 ' >
            Empower yourself with lightning fast transactions. <br /> Whether it's
            transferring funds, paying bills. Explore the uncommon possibilities
            of digital banking.
          </p>
        </div>
        <div  className='w-[] mt-20'>
            <img src='/images/heroImg.svg'  alt='' />
        </div>
        <div  className='w-[%] md:block hidden  '>
            <div>
            <img src='/images/happycust.png'  alt='' />

            </div>

            <div className="mt-9" >
            <img src='/images/rating.png'  alt='' />

            </div>
            <div className="mt-12">
                <p className="font-semibold" >Download at</p>
            <img src='/images/download.png'  alt='' />

            </div>
            <div className="absolute top-20 right-2"  >
                <img src='/images/bluebg1.png'  alt='' />
            </div>
        </div>
      </div>
    
    </div>
    <div>
        <img src='/images/banner.png' alt='' />
      </div>
    </section>

  );
};

export default Hero;
