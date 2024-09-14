import Layout from "@/components/Layout/Layout";
import HowTo from "@/components/UI/HowTo";
import React, { useState } from "react";

const Contactus = () => {
  const [xpay, setXpay] = useState("xpay");
  const cont = [
    {
      title: 'Chat to sales',
      desc:'Speak to our friendly team.',
      cont: 'xforce@xtrempay.com',
      img: '/images/mail.png'

    },
    {
      title: 'Chat to support',
      desc:'We’re here to help.',
      cont: 'support@xtrempay.com',
      img: '/images/msg.png'

    },
    {
      title: 'Call us',
      desc:'Mon-Fri from 8am to 5pm.',
      cont: '07032932410',
      img: '/images/phon.png'

    }
  ]
  return (
    <Layout>
      <section className="font-Poppins text-justify">
        <p className="text-[#FF6666] text-center text-[28px] md:text-[30px] font-[600] pt-40">
          Contact us
        </p>
        <p className="text-center font-[600] py-3 text-[17] md:text-[34px] ">
          We’d love to hear from you
        </p>
        <p className="text-center font-[500] text-[14px] md:text-[20px] ">
          Our friendly team is always here to chat.
        </p>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-6 md:gap-7 mt-10 md:mt-20 px-5 md:px-20">
          {cont?.map(items => <div className='bg-[#F9F5FF] px-4 py-6' >
            <div>
              <img src={items?.img} />

              <p className='font-bold text-[14px] md:text-[20px] pt-8' >{items.title}</p>
              <p className='text-gray-500 text-[13px] py-3 md:text-[15px]' >{items.desc}</p>
              <p className='text-primary text-[14px] md:text-[18px] font-[500] ' >{items.cont}</p>
            </div>
          </div>)}
        
        </div>

        <div></div>
        <div className="md:flex md:px-20 px-5 md:pt-16 mt-5 mb-28">
          <div className="md:w-1/2 font-montserrat ">
            <p className="font-semibold text-[18px] md:text-[34px] ">Send us a message</p>
            <p className='' >Our friendly team would love to hear from you.</p>
            <div className="md:flex justify-between md:w-[90%] mt-10 md:mt-16">
              <div className="">
                <p className="text-[]">Full Name</p>
                <input
                  placeholder="Enter First Name"
                  className=" w-[100%] pl-5 outline-none border border-[#C9C5CC]  rounded-lg py-5"
                />
              </div>{" "}
              <div className="md:mt-0 mt-7">
                <p className="text-[]">Last Name</p>
                <input
                  placeholder="Enter Last Name"
                  className=" w-[100%] pl-5 outline-none rounded-lg border border-[#C9C5CC]   py-5"
                />
              </div>
            </div>

            <div className="mt-7">
              <p className="font-">Email</p>
              <input
                placeholder="Enter Email"
                className=" w-[96%] pl-5 outline-none border border-[#C9C5CC] bg-[#] rounded-lg py-5"
              />
            </div>
            {/* <div className="flex justiy-end ">
              <p className="text-[#4FA9AB] text-[16px]">Forget password</p>
            </div> */}
            <div className="mt-7">
              <p className="font-">Message</p>
              <textarea
                placeholder="Enter Your Message "
                className=" w-[96%] pl-5 outline-none border border-[#C9C5CC] bg-[#] rounded-lg py-10"
              />
            </div>
            <div className="mt-10">
              <button className="w-[96%] bg-primary text-white py-6 rounded-lg font-semibold text-[16px] ">
                Send Message
              </button>
            </div>
          </div>
          <div className="md:1/2 md:mt-0 md:block hidden mt-6">
            <img src="/images/contactimg.png" alt="" />
          </div>
        </div>

        <HowTo />
      </section>
    </Layout>
  );
};

export default Contactus;
