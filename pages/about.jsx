import Layout from "@/components/Layout/Layout";
import HowTo from "@/components/UI/HowTo";
import React from "react";

const about = () => {
  return (
    <Layout>
      <section className="font-Poppins text-justify">
        <p className="text-[#FF6666] text-center text-[28px] md:text-[30px] font-[600] pt-28 md:pt-40">
          About us
        </p>
        <p className="text-center font-[600] text-[17px] md:text-[34px] ">
          Empowering Financial Freedom for All
        </p>
        <div className="mt-16">
          <img src="/images/banner.png" alt="" />
        </div>

        <div className="mt-20 md:px-20 px-5 md:justify-between md:space-x-10 md:flex">
          <div className="md:w-1/2">
            <p className=" text-[18px] md:text-[30px] font-[600] ">
              What We Stand For
            </p>

            <p className="mt-4 md:text-[16px] text-[13px] ">
              Xtrempay is at the forefront of financial innovation, dedicated to
              bridging the gap between traditional financial systems and the
              needs of underserved communities. We are driven by a mission to
              create inclusive financial solutions that empower every individual
              and business to thrive
            </p>
          </div>

          <div className="md:w-1/2 md:mt-0 mt-9">
            <p className=" md:text-[16px] text-[13px] ">
              Xtrempay offers a comprehensive suite of solutions designed to
              empower individuals and businesses. Our flagship products, Passabi
              and Moola, provide innovative approaches to savings, credit, and
              financial management, ensuring that even the most vulnerable
              communities can seize opportunities and pave their own path to
              prosperity
            </p>
            <p className="mt-4 md:text-[16px] text-[13px] ">
              Xtrempay is set out to redefine the financial landscape,
              particularly for those often left behind by traditional banking
              systems. our primary aim is to address the glaring gap between.
              aspiration and accessibility
            </p>
          </div>
        </div>
        
        <div className="bg-[url('/images/bannab.png')] mt-10  ">
        <div className='bg-[#2F2F32] flex justify-center py-8 ' >
        <div className=' text-white' >
          <div className='flex justify-center px-5'>
          <p className='md:w-[70%] text-center pb-3 md:text-[17px] text-[14px] ' >
              To unlock the potential of every individual and business by
              providing innovative financial solutions that drive social impact
              and foster economic growth
            </p>
          </div>
      
            <div  className='flex justify-center'>
              <img src='/images/downab.png' alt='' />
            </div>
          </div>
        </div>
        
          
          </div>
        <div className="md:flex mt-20 md:px-20 w-full mb-20  px-5 md:justify-center">
          <div className=" md:w-1/2 ">
            <p className="md:text-[16px] text-[13px] ">
              Xtrempay offers a comprehensive suite of solutions designed to
              empower individuals and businesses. Our flagship products, Passabi
              and Moola, provide innovative approaches to savings, credit, and
              financial management, ensuring that even the most vulnerable
              communities can seize opportunities and pave their own path to
              prosperity
            </p>
            <p className="mt-4 md:text-[16px] text-[13px] ">
              Our impact extends far beyond traditional financial services. By
              providing tools that enable financial independence, Xtrempay is
              helping to break cycles of poverty, fostering social inclusion,
              and driving sustainable economic growth in communities that need
              it most
            </p>
          </div>
        </div>

        <HowTo />
      </section>
    </Layout>
  );
};

export default about;
