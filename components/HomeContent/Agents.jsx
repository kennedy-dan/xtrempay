import React from "react";

const Agents = () => {
  return (
    <div className="bg-[#E3EEFE] md:px-20 px-5 font-Poppins py-16 md:flex ">
      <div className="md:w-1/2" >
        <p className='text-[32px] font-[500]' >Become an Xtrempay<br /> Agent</p>
        <p className="py-7" >
          Enjoy 0% charges on your transactions and also make free deposite and
          withdrawals
        </p>

        <div>
          <button className="bg-primary space-x-2 md:w-[37%] w-[65%] pl-2 text-sm rounded-2xl items-center jus py-2 text-white flex  ">
            <img className="w-4 " alt='' src="/images/phone.png" />
            <span>Contact to join xtrempay</span>
          </button>
        </div>
        <div className="mt-5">
          <button className="bg-primary space-x-2 md:w-[37%] w-[65%] pl-2 j text-sm items-center rounded-2xl py-2 text-white flex  ">
            <img className="w-4 "  alt='' src="/images/phone.png" />
            <span>Send an Email</span>
          </button>
        </div>
      </div>
      <div className='w-1/2' ></div>
    </div>
  );
};

export default Agents;
