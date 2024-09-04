import React from "react";
import { Carousel as AntCarousel } from "antd/lib";
import Layout from "@/components/Layout/Layout";
import HowTo from "@/components/UI/HowTo";
import FAQ from "@/components/UI/FAQ";

const Passabi = () => {
  const sliderData = [
    {
      img: "/images/passabihero.png",
    },
    {
      img: "/images/passabihero.png",
    },
    {
      img: "/images/passabihero.png",
    },
  ];

  const seData = [
    {
      name: "Contribution tracking",
      img: "/images/good.png",
      msg: "Passabi helps maintain transparency, assess contribution progress and demonstrate the growth and impact of group contributions",
    },
    {
      msg: "Allow all members of the group to have equal access and authority over their contributions, fostering trust and accountability within the group ",
      img: "/images/good.png",
      name: "Joint Ownership ",
    },
    {
      msg: "Passabi streamlines the loan disbursement process of electronically transferiring loan funds to borrowers accounts without the need of manual process or intervention.",
      img: "/images/good.png",
      name: "Automated loans disbursement",
    },
    {
      msg: "Passabi provides communication tools and reminders to keep memebers informed about their contribution schedules and deadlines, helping them stay on track with their saving plans.",
      img: "/images/good.png",
      name: "Communication and Reminders",
    },
    // {
    //   msg: "Data Residency and Compliance: Meeting Global Standards",
    //   img: "/images/data.png",
    // },
  ];
  return (
    <Layout>
      <section className="font-Poppins ">
        <div className="md:flex justify-between items-center pt-40 md:px-20 px-5">
          <div>
            <p className="text-[#FF6666] font-bold text-[34px] md:text-[51px]">
              Passabi
            </p>

            <p className=" font-bold text-[27px] md:text-[40px]">
              Revolutionizing Thrift{" "}
            </p>
            <p className=" font-[500]  text-[27px] md:text-[40px]">
              For a brighter tomorrow
            </p>
            <p className="font-[400] text-[13px] pt-5">
              Passabi brings modern innovation to traditional thrift groups,<br />
              empowering communities to save more, earn interest, and <br /> access
              affordable credit. Secure your future with Passabi—<br />where tradition
              meets technology
            </p>
            <div className='mt-5' >
          <button className="border-primary border-1 border space-x-2 md:w-[37%] w-[45%] pl-2 text-sm rounded-xl items-center jus py-3 text-black flex  ">
           <div className="flex items-center space-x-2 "  >
           <img className="w-4 " alt='' src="/images/apple.png" />
           <img className="w-4 " alt='' src="/images/store.png" />

           </div>
            <span>DOWNLOAD APP</span>
          </button>
        </div>
          </div>
          <div className="md:mt-0 mt-5">
            <img src="/images/passabihom.png" className="w-[500px]" alt="" />
          </div>
        </div>

 

        <section className="md:px-20 px-5 mt-28 py-16 font-Poppins bg-[#F1F1F1]">
          <div className="md:flex justify-between ">
            <div className="md:w-1/2">
              <p className="font-[600] text-[18px] md:text-[32px]">
                GET TO KNOW ABOUT
                <br className='hidden md:block' /> PASSABI{" "}
              </p>
              <p className="mt-2 md:text-[18px] text-[14px] font-[400] md:w-[75%] ">
              Our platform addresses these concerns by securely storing funds through licensed financial partnerships, ensuring contributors' savings earn interest. 
              </p>
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 mt-10 md:mt-0 gap-6 md:w-[60%]">
              <div className="bg-[#FFEAD4] px-6 py-5">
                <p className="font-bold text-[#FFDBA8] rounded-2xl text-[20px] md:text-[43px]">
                  01
                </p>

                <p className="font-semibold text-[16px] md:text-[20px] py-4">
                  No interest Loan
                </p>

                <p className="text-[13px]">
                  A standout feature of Passabi is its provision of no-interest
                  loans to its members. This unique offering enables individuals
                  to access funds without the burden of accruing interest,
                  making it easier to manage and repay loans.
                </p>
              </div>
              <div className="bg-[#FFEAD4] rounded-2xl px-6 py-5">
                <p className="font-bold text-[#FFDBA8] text-[20px] md:text-[43px]">02</p>

                <p className="font-semibold text-[16px] md:text-[20px py-4">
                  Customize Contribution Plan{" "}
                </p>

                <p className="text-[13px]">
                  Understanding that financial capabilities and needs vary from
                  person to person, Passabi allows its users to tailor their
                  contribution plans. This flexibility ensures that members can
                  save and contribute at a pace that suits their financial
                  situation, making the process of saving less daunting and more
                  achievable.
                </p>
              </div>{" "}
              <div className="bg-[#FFEAD4] rounded-2xl px-6 py-5">
                <p className="font-bold text-[#FFDBA8] text-[20px] md:text-[43px]">03</p>

                <p className="font-[600] text-[16px] md:text-[20px] py-4">
                  Saving and loan Management{" "}
                </p>

                <p className="text-[13px]">
                  Passabi integrates sophisticated tools for managing savings
                  and loans, ensuring that members have a clear overview of
                  their finances. This feature aids in fostering financial
                  discipline among users, encouraging regular saving habits, and
                  providing a structured approach to loan repayment.
                </p>
              </div>{" "}
              <div className="bg-[#FFEAD4] px-6 py-5 rounded-2xl">
                <p className="font-bold text-[#FFDBA8] text-[20px] md:text-[43px]">04</p>

                <p className="font-semibold text-[16px] md:text-[20px] py-4">
                  Instant SMS & Email Notification{" "}
                </p>

                <p className="text-[13px]">
                  In today’s fast-paced world, immediate access to information
                  is crucial. Passabi caters to this need through instant SMS
                  and email notifications, keeping members up-to-date on their
                  savings contributions, loan disbursements, and repayment
                  schedules.
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="md:px-20 px-5 pt-28 mb-10">
          <div className="md:flex ">
            <div className="md:w-1/2">
              <img
                src="/images/passfeat.png"
                className="h-[560px] w-[]"
                alt=""
              />
            </div>
            <div className="md:w-1/2">
              <p className="font-bold text-[30px] mb-6 ">Passabi Features</p>

              {seData?.map((info, index) => (
                <div key={index} className="">
                  <div className="flex mt-12 space-between items-center">
                    <div className="w-[10%]">
                      {" "}
                      <img alt="" className="w-8" src={info?.img} />
                    </div>
                    <div className="w-[90%]">
                      <p className="text-[16px] font-bold">{info?.name}</p>
                      <p className="text-[13px]">{info?.msg}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <HowTo />
        <FAQ />
      </section>
    </Layout>
  );
};

export default Passabi;
