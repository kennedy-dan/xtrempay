import Layout from "@/components/Layout/Layout";
import FAQ from "@/components/UI/FAQ";
import HowTo from "@/components/UI/HowTo";
import React from "react";

const Moola = () => {
  const seData = [
    {
      name: "Guaranteed Principal",
      img: "/images/good.png",
      msg: "Your original deposit is safe and will be returned to you at the end of the term.",
    },
    {
      msg: "There’s a chance to win a prize  ",
      img: "/images/good.png",
      name: "Potential for Prizes ",
    },
    {
      msg: "The deposit is held for a specified period, similar to a traditional fixed savings account.",
      img: "/images/good.png",
      name: "Fixed Term",
    },
    {
      msg: "Moola helps you save money without manual effort, promoting financial discipline.",
      img: "/images/good.png",
      name: "Automated Savings Plan",
    },
    // {
    //   msg: "Data Residency and Compliance: Meeting Global Standards",
    //   img: "/images/data.png",
    // },
  ];
  return (
    <Layout>
      <section className="font-Poppins pt-40 md:pt-24 ">
        <div className="md:flex justify-between items-center md:px-20 px-5">
          <div className="md:w-1/2">
            <p className=" font-bold text-[34px] md:text-[51px] text-[#FF6666]">
              Moola
            </p>

            <p className=" font-bold text-[18px] md:text-[40px] text-justify">
              A new way of saving{" "}
            </p>
            <p className=" font-[500] text-primary text-[18px] text-justify md:text-[40px]">
              Save and win N1m Weekly
            </p>
            <p className="font-[400] text-[13px] pt-5 text-justify md:w-[70%]">
              Moola is a financial app that offers prize linked savings account
              as an alternative to traditional interest based savings. Moola
              offers people an exceptional and exciting chance of wining a cash
              prize in return for saving money into Moola account
            </p>
            <div className="mt-5">
              <button className="border-primary border-1 border space-x-2 md:w-[37%] w-[56%] pl-2 text-sm rounded-xl items-center jus py-3 text-black flex  ">
                <div className="flex items-center space-x-2 ">
                  <img className="w-4 " alt="" src="/images/apple.png" />
                  <img className="w-4 " alt="" src="/images/store.png" />
                </div>
                <span>DOWNLOAD APP</span>
              </button>
            </div>
          </div>
          <div className="md:mt-0 mt-5">
            <img src="/images/molahome.png" className="w-[500px]" alt="" />
          </div>
        </div>

        <p className="text-center text-gray-600 mt-20 px-5 font-[500] text-[18px] md:text-[32px]">
          Unlock Your Financial Potential – Save, Earn, Win
        </p>
        <div className="justify-center md:px-[20] px-5  flex w-full">
          <img src="/images/under.png" className="w-20" alt="" />
        </div>
        <div className="md:flex justify-between md:px-20 pt-10 px-5 md:space-x-16 ">
          <div className="md:w-1/2">
            <img src="/images/serve.png" alt="" />
          </div>

          <div className="md:w-1/2 md:mt-0 mt-16">
            <div>
              <p className="font-[500] text-[18px] md:text-[32px]">
                Fixed Savings
              </p>

              {/* <p className="font-semibold text-[20px] py-4">Secure Gateway</p> */}

              <p className="text-[13px] md:text-[18px] text-gray-600 mt-3 text-justify">
                Create an exciting Saving plan for 3-12 month and get a chance
                to win millions, Instead of receiving higher interest, a portion
                of the interest that would have been earned is pooled together
                to fund a prize draw. The prize could be in the form of cash,
                goods, or other incentives, and the draw occurs periodically{" "}
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
              <p className="font-[500] text-[13px] md:text-[32px] mt-10">
                Raffle Savings
              </p>

              {/* <p className="font-semibold text-[20px] py-4">Secure Gateway</p> */}

              <p className=" text-[13px] md:text-[18px] text-gray-600 text-justify">
                Raffle save accounts - a creative way to promote savings,
                blending traditional banking with a bit of fun and excitement.
                Create a weekly, monthly and quarterly saving plan, And get a
                chance{" "}
                <span className="text-primary">to win cash prizes. </span>
                Your deposit is save.
              </p>
            </div>

            {/* <div>
          <button className="px-5 py-3 mt-10 uppercase flex rounded-md space-x-2 text-[18px] items-center justify-center border border-1 border-primary">
            <p>see more</p>
            <img src='/images/arrow.png' alt='' className=' ' />
          </button>
          </div> */}
          </div>
        </div>

        <div className="md:flex items-center justify-between px-5 md:px-20 bg-[#F1F6F9] mt-10 pt-1 md:pt-28">
          <div className=" md:mt-0 mt-16">
            <p className="font-[500] text-[21px]">Moola Features</p>
            {seData?.map((info, index) => (
              <div key={index} className="">
                <div className="flex mt-12 space-between items-center">
                  <div className="w-[10%]">
                    {" "}
                    <img alt="" className="w-8" src={info?.img} />
                  </div>
                  <div className="w-[90%]">
                    <p className="text-[16px] font-bold">{info?.name}</p>
                    <p className="text-[13px] nd:text-left text-justify ">{info?.msg}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="md:mt-0 mt-10">
            <img
              src="/images/moolafeat.png"
              className="h-[560px] w-[]"
              alt=""
            />
          </div>
        </div>

        {/* <div className="pt-28 md:px-28 px-9 font-Poppins " >
            <img src='/images/mooladivide.png' alt='' />
        </div> */}

        <HowTo />

        <FAQ />
      </section>
    </Layout>
  );
};

export default Moola;
