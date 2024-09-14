import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import Link from 'next/link'
const Use = () => {
  return (
    <section className="md:px-20 px-5 pt-28 font-Poppins">
      <p className="text-center text-gray-600 font-[500] text-[18px] md:text-[32px]">
        Unlock Your Financial Potential – Save, Earn, Win
      </p>
      <div className="justify-center flex w-full">
        <img src="/images/under.png" className="w-20" alt="" />
      </div>
      <div className="md:flex justify-between mt-20 md:space-x-16 ">
        <div className="md:w-1/2">
          <img src="/images/serve.png" alt="" />
        </div>

        <div className="md:w-1/2">
        <p className="text-[#FF6666] mb-4 font-semibold text-[20px] md:text-[43px]">
              Moola
            </p>
          <div>
            <p className="font-[500] text-[17px] md:text-[32px]">
              Fixed Savings
            </p>

            {/* <p className="font-semibold text-[20px] py-4">Secure Gateway</p> */}

            <p className="text-[13px] md:text-[18px] text-justify text-gray-600 mt-3">
              Create an exciting Saving plan for 3-12 month and get a chance to
              win millions, Instead of receiving higher interest, a portion of
              the interest that would have been earned is pooled together to
              fund a prize draw. The prize could be in the form of cash, goods,
              or other incentives, and the draw occurs periodically{" "}
              <span className="text-primary">
                (e.g., weekly, monthly, quarterly).
              </span>{" "}
              <br className="md:block hidden" />
              Account holders are automatically entered into these draws based
              on their deposits. The more you deposit, the more entries you
              might get.
            </p>
          </div>
          <div>
            <p className="font-[500] text-[17px] md:text-[32px] mt-10">
              Raffle Savings
            </p>

            {/* <p className="font-semibold text-[20px] py-4">Secure Gateway</p> */}

            <p className=" text-[13px] md:text-[18px] text-justify text-gray-600">
              Raffle save accounts - a creative way to promote savings, blending
              traditional banking with a bit of fun and excitement. Create a
              weekly, monthly and quarterly saving plan, And get a chance{" "}
              <span className="text-primary">to win cash prizes. </span>
              Your deposit is save.
            </p>
          </div>

          <div>
          <Link href='/moola' >

            <button className="px-5 py-3 mt-10 uppercase text-black hover:text-white flex rounded-md space-x-2 text-[18px] items-center justify-center border border-1 hover:bg-primary border-primary">
              <p>see more</p>
              <IoIosArrowForward className=' ' />{" "}
            </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="md:flex justify-between items-center space-x-16 ">
        <div className="md:w-1/2 md:mt-0 mt-14">
          <div>
            <p className="text-[#FF6666] mb-4 font-semibold text-[20px] md:text-[43px]">
              Passabi
            </p>
            <p className="font-[500] text-[14px] md:text-[32px]">
              Made for Small Business Owners
            </p>

            {/* <p className="font-semibold text-[20px] py-4">Secure Gateway</p> */}

            <p className="text-[13px] md:text-[18px] text-gray-600 mt-3 text-justify">
              Passabi brings modern innovation to traditional thrift groups,
              empowering communities to save more, earn interest, and access
              affordable credit. Secure your future with Passabi—where tradition
              meets technology
            </p>
          </div>

          <div>
            <Link href='/passabi' >
          <button className="px-5 py-3 mt-10 uppercase text-black hover:text-white flex rounded-md space-x-2 text-[18px] items-center justify-center border border-1 hover:bg-primary border-primary">
              <p>see more</p>
              <IoIosArrowForward className=' ' />{" "}
            </button>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 md:mt-0 mt-8 ">
          <img src="/images/passbi.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Use;
