import Layout from "@/components/Layout/Layout";
import React, {useState} from "react";

const Contactus = () => {
    const [xpay, setXpay] = useState('xpay')
    

    

  return (
    <Layout>
      <section className="font-Poppins">
        <div>
          <div className="bg-[url('/images/contactus.png')] bg-cover w-full flex items-center bg-center h-[199px]">
            <p className="text-white font-bold text-[53px] text-center w-full ">
              Contact Us
            </p>
          </div>
        </div>

        <div className="flex justify-center space-x-4 mt-10">
          <div className={`cursor-pointer  p-3 ${xpay === 'xpay' ? 'bg-gray-400 rounded-lg': '' } `} onClick={() => setXpay('xpay')} >
            <p>Xtrempay</p>
          </div>
          <div className={`cursor-pointer  p-3 ${xpay === 'moola' ? 'bg-gray-400 rounded-lg': '' } `}onClick={() => setXpay('moola')}>
            <p>Moola</p>
          </div>
          <div className={`cursor-pointer  p-3 ${xpay === 'pass' ? 'bg-gray-400 rounded-lg': '' } `} onClick={() => setXpay('pass')}>
            <p>Passabi</p>
          </div>
        </div>

        <div>
          <p className='text-black font-[600] text-[34px] text-center mt-9' >Contact Support</p>

          <p className='text-black font-[400] text-[21px] text-center mt-4 mb-5'>Fill in the required information below and an Xtrempay representative will get in touch.</p>
        </div>
        <div className='md:flex md:px-20 px-5 md:pt-16 mt-5' >
        <div className="md:w-1/2 font-montserrat ">
            {/* <p className="font-semibold text-[34px] ">Leave A Message</p> */}
            <div className="mt-16">
              <p className="text-[]">Full Name</p>
              <input
                placeholder="Enter Full Name"
                className=" w-[96%] pl-5 outline-none border border-[#C9C5CC]  rounded-sm py-5"
              />
            </div>{" "}
            <div className="mt-7">
              <p className="font-">Email</p>
              <input
                placeholder="Enter Email"
                className=" w-[96%] pl-5 outline-none border border-[#C9C5CC] bg-[#] rounded-sm py-5"
              />
            </div>
            {/* <div className="flex justiy-end ">
              <p className="text-[#4FA9AB] text-[16px]">Forget password</p>
            </div> */}
            <div className="mt-7">
              <p className="font-">Message</p>
              <textarea
                placeholder="Enter Your Message "
                className=" w-[96%] pl-5 outline-none border border-[#C9C5CC] bg-[#] rounded-sm py-5"
              />
            </div>
            <div className="mt-10">
              <button className="w-[96%] bg-primary text-white py-6 rounded-3xl font-semibold text-[16px] ">
                Send Message
              </button>
            </div>
          </div>
          <div className='md:1/2 md:mt-0 mt-6' >
          <img src='/images/contactimg.png' alt='' />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contactus;
