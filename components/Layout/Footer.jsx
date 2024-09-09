import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="font-Poppins mt-28">
      <div className="bg-[#c7c1c1]  h-[1px] w-full "></div>
      <div className="md:flex justify-between md:py-16 py-9 md:px-20 px-5">
        <div className="">
          <img src="/images/logo1.png" alt="" />

          <p className="text-[13px] md:w-[400px] font-[400] text-justify ">
            Xtrempay is designed to address specific{" "}
             challenges in the digital and
            financial space,
             supporting the informal financial
            sector and
            driving financial inclusion, In addition, we offer
             Passabi and Moola, which provides
            range of
             financial needs.
          </p>
        </div>

        <div className="md:mt-0 mt-9">
          <p className="font-semibold">Page Links</p>
          <div className="space-y-1">
            <Link href="/moola">
              <p className="mt-4 hover:text-primary">Moola</p>
            </Link>
            <Link href="/passabi">
              <p className='hover:text-primary' >Passabi</p>
            </Link>
            <Link href="/about">
              <p className='hover:text-primary'>About Us</p>
            </Link>
            <Link href="/contactus">
              <p className='hover:text-primary'>Contact</p>
            </Link>
          </div>
        </div>

        <div className="md:mt-0 mt-9">
          <p className="text-primary font-[600] hover:text-primary">Join our newsletter</p>
          <p className="font-[400]">
            We’ll send you a nice letter once per week. No spam.
          </p>

          <div className="flex space-x-3 mt-3">
            <div className="w-[70%]">
              <input
                placeholder="Enter your email"
                className="bg-white w-full px-3 border border-1 border-gray-500 rounded-lg h-14 "
              />
            </div>
            <div className="w-[30%]">
              <button className="rounded-lg h-14 w-full bg-primary text-white">
                Subscribe
              </button>
            </div>
          </div>
          <div className="flex  mt-9 items-center space-x-4">
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
          {/* <img className="mt-4"  alt='' src="/images/loc.png" /> */}
        </div>
      </div>

      <div className="flex bg-black text-white text-[13px] py-3 space-x-1 mt-3  w-full justify-center">
        <img src="/images/c.png" alt="" className="" />
        <p>2024 Xtrempay. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
