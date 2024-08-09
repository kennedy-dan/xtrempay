import React from "react";
import { Carousel as AntCarousel } from "antd/lib";
import Layout from "@/components/Layout/Layout";

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
      <section className="font-Poppins">
        <div className="">
          <AntCarousel autoplay effect="fade" speed={1500}>
            {sliderData.map((img, index) => (
              <div className="relative  h-[50vh] " key={index}>
                <div
                  style={{ backgroundImage: `url(${img.img})` }}
                  className={`  w-full h-full flex items-center justify-center bg-cover bg-center bg-gray-200`}
                >
                  {/* <img src={img.img} className="object-cover w-screen h-full" /> */}
                  <div className="text-center text-white font-bold text-[43px] ">
                    <p>PASSABI</p>
                  </div>
                </div>
              </div>
            ))}
          </AntCarousel>
        </div>
        <div>
          <p className="font-[500] mt-9 text-[18px] md:text-[30px] text-center">
            Redefining Ajo, Adashe, Esusu for small business owners.
            <br className='md:block hidden' /> Alternative for way to save and borrow money for Micro,
            <br className='md:block hidden'  /> Small, and Medium Enterprises.
          </p>
          <p className="text-[13px] mt-4 font-[400] text-center">
            Passabi offers seamless group savings and provide access to no
            interest loans for individual members that have come together to
            solve their money
            <br className='md:block hidden' /> challenges. Digitalize rotating savings platform that is
            seamlessly integrates with commercial bank and
            <br className='md:block hidden' /> fin-tech companies to offers access to secure and easy to use
            financial services
          </p>
        </div>

        <section className="md:px-20 px-5 mt-28 py-16 font-Poppins bg-[#F1F1F1]">
          <div className="md:flex justify-between items-center">
            <div className="md:w-1/2">
              <p className="font-bold text-[28px] md:text-[50px]">
                GET TO KNOW
                <br /> ABOUT PASSABI{" "}
              </p>
              <p className="text-[14px] font-[400] md:w-[75%] ">
                Passabi offers seamless group savings and provide access to no
                interest loans for individual members that have come together to
                solve their money challenges. Digitalize rotating savings
                platform that is seamlessly integrates with commercial bank and
                fin-tech companies to offers access to secure and easy to use
                financial services
              </p>
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-6 md:w-[60%]">
              <div>
                <p className="font-bold text-[43px]">01</p>

                <p className="font-semibold text-[20px] py-4">
                  No interest Loan
                </p>

                <p className="text-[13px]">
                  A standout feature of Passabi is its provision of no-interest
                  loans to its members. This unique offering enables individuals
                  to access funds without the burden of accruing interest,
                  making it easier to manage and repay loans.
                </p>
              </div>
              <div>
                <p className="font-bold text-[43px]">02</p>

                <p className="font-semibold text-[20px] py-4">
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
              <div>
                <p className="font-bold text-[43px]">03</p>

                <p className="font-semibold text-[20px] py-4">
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
              <div>
                <p className="font-bold text-[43px]">04</p>

                <p className="font-semibold text-[20px] py-4">
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
        <div className='md:px-20 px-5 pt-28' >
        <p className="font-bold text-[30px] mb-6 text-center">Passabi Features</p>

        <div className="md:flex ">

          <div className="md:w-1/2">
            <img
              src="/images/passabiimg.png"
              className="h-[560px] w-[]"
              alt=""
            />
          </div>
          <div className="md:w-1/2">
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
     
      </section>
    </Layout>
  );
};

export default Passabi;
