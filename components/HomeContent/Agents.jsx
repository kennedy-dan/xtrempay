import React from "react";

const Agents = () => {
  return (
    <div className="bg-[#E3EEFE] md:px-20 px-5 font-Poppins py-16 md:flex md:items-center ">
      <div className="md:w-1/2" >
        <p className='md:text-[32px] text-[18px] font-[500]' >Become an <span className='text-primary'>Xtrempay</span>  Agent</p>
        <p className="pb-7 md:text-[17px] text-[13px]" >
          Enjoy 0% charges on your transactions and also make free deposite and
          withdrawals
        </p>

        <div>
          <button className="border-primary border-1 border space-x-2 md:w-[37%] w-[45%] pl-2 text-sm rounded-xl items-center jus py-3 text-black flex  ">
           <div className="flex items-center space-x-2 "  >
           <img className="w-4 " alt='' src="/images/apple.png" />
           <img className="w-4 " alt='' src="/images/store.png" />

           </div>
            <span>DOWNLOAD APP</span>
          </button>
        </div>
      
      </div>
      <div className='md:w-1/2 md:mt-0 mt-4' >
      <img alt='' src='/images/pos.png' /></div>
    </div>
  );
};

export default Agents;
