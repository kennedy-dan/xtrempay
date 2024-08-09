import React from "react";

const Footer = () => {
  return (
    <div className="font-Poppins mt-28">
      <div className="bg-[#c7c1c1]  h-[1px] w-full "></div>
      <div className="md:flex justify-between md:py-16 py-9 md:px-20 px-5">
        <div className="">
          <img src="/images/logofooter.png" alt="" />

          <p className="text-[13px] font-[400] ">
            Xtrempay is designed to address specific{" "}
            <br className="md:block hidden" /> challenges in the digital and
            financial space,
            <br className="md:block hidden" /> supporting the informal financial
            sector and
            <br />
            driving financial inclusion, In addition, we offer
            <br className="md:block hidden" /> Passabi and Moola, which provides
            range of
            <br className="md:block hidden" /> financial needs.
          </p>
        </div>

        <div className="md:mt-0 mt-9">
          <p className="font-semibold">Page Links</p>
          <div className="space-y-1">
            <p className="mt-4">Home</p>
            <p>Features</p>
            <p>About Us</p>
            <p>Contact</p>
          </div>
        </div>

        <div className="md:mt-0 mt-9">
          <p className="font-semibold">Location</p>
          <img className="mt-4"  alt='' src="/images/loc.png" />
        </div>

        <div className="flex md:mt-0 mt-9 items-center space-x-4">
          <div>
            <img src="/images/fb.png" alt="" />
          </div>
          <div>
            <img src="/images/in.png" alt="" />
          </div>
          <div>
            <img src="/images/gram.png" alt="" />
          </div>
        </div>
      </div>
      <p className="md:text-center text-[14px] md:px-20 px-5">
        Xtrempay and featured customers are financial technology companies and
        not a bank. Banking services are provided by our partner banks who are
        duly licensed by the CBN.
      </p>
      <div className='flex bg-black text-white text-[13px] py-3 space-x-1 mt-3  w-full justify-center' >
        <img src='/images/c.png'  alt='' className='' />
        <p>2024 Xtrempay. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
