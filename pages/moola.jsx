import Layout from "@/components/Layout/Layout";
import React from "react";

const Moola = () => {
  const seData = [
    {
      name: "Prize-linked savings",
      img: "/images/good.png",
      msg: "Save and unlock the chance of winning cash prizes and lot of rewards.",
    },
    {
      msg: "Experience  secured and seamless online and offline shopping experience ",
      img: "/images/good.png",
      name: "Debit Cards ",
    },
    {
      msg: "Set goals, track spending, lock savings, earn interest and win cash prizes. the more you save the more your chances of entries into weekly drawing.",
      img: "/images/good.png",
      name: "Linked Account",
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
      <section className="font-Poppins pt-10">
        <div className="md:flex justify-between items-center md:px-20 px-5">
          <div>
            <p className="text-primary font-bold text-[34px] md:text-[51px]">MOOLA</p>

            <p className=" font-bold text-[27px] md:text-[40px]">A new way of saving </p>
            <p className=" font-[500]  text-[27px] md:text-[40px]">Save and win N1m Weekly</p>
            <p className="font-[400] text-[13px] pt-5">
              Moola is a financial app that offers prize linked savings
              <br /> account as an alternative to traditional interest based
              <br /> savings. Moola offers people an exceptional and
              <br /> exciting chance of wining a cash prize in return for
              <br /> saving money into Moola account
            </p>
          </div>
          <div className="md:mt-0 mt-5" >
            <img src='/images/moolahero.png' className='w-[500px]' alt='' />
          </div>
        </div>

        <div className="md:flex px-5 md:px-20 pt-28">
          <div className='md:w-1/2' >
            <img src='/images/moolaimg.png' className='h-[560px] w-[]' alt='' />
          </div>
          <div className='md:w-1/2 md:mt-0 mt-16'>
            <p className="font-bold text-[21px]" >Moola Features</p>
            {seData?.map((info, index) => (
              <div key={index} className="">
                <div className="flex mt-12 space-between items-center">
                  <div className="w-[10%]" >
                    {" "}
                    <img alt="" className="w-8" src={info?.img} />
                  </div>
                  <div className="w-[90%]" >
                    <p className='text-[16px] font-bold' >{info?.name}</p>
                    <p className="text-[13px]" >{info?.msg}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-28 md:px-28 px-9 font-Poppins " >
            <img src='/images/mooladivide.png' alt='' />
        </div>

        <div className="md:mx-20 mx-5 bg-primary md:flex mt-28 md:px-20 px-5 justify-between py-10 items-center "  >
          <div>
            <img src='/images/signup.png'className='w-[400px]' alt='' />
          </div>

          <div>
            <p className="font-bold text-[34px] md:mt-0 mt-9 " >How do i sign up 
            to Moola?</p>

            <p className="text-white py-4 md:py-9">Download Xtrempay app <br />
            Create your Moola account on Xtrempay<br />  start saving, Start winning</p>

            <div>
              <img src='/images/play.png' alt='' />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Moola;
