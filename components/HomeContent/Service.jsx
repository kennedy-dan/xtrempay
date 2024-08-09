import React from "react";

const Service = () => {
  return (
    <section className="bg-primary py-10 md:px-20 px-5 text-white font-Poppins">
      <div className="md:flex justify-center w-full">
        <div>
          <p className="md:text-[35px] text-[28px] text-center font-bold">
            Services we are offering
          </p>
          <div className="w-full flex justify-center">
            <img
              src="/images/serviceoffering.png"
              className="w-[100px]"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="md:flex md:space-x-9 items-center ">
        <div>
          <img src="/images/service1.png"  alt='' className="" />
        </div>
        <div>
          <p className="text-white font-bold text-[24px] ">Moola</p>
          <p className="text-white font-[500] text-[18px] text] py-8 ">
            Save with Excitement <br /> Save and Win Up to 1M weekly
          </p>

          <p>
            Moola is a financial app that offers prize-linked savings account as
            an alternative to traditional interest based savings. Moola offers
            people an exceptional and exciting chance of wining a cash prize in
            return for saving money into Moola account.
          </p>

          <div className="mt-6" >
            <button className="bg-white rounded-lg px-5 uppercase py-3 text-black ">See more</button>
          </div>
        </div>
      </div>

      <div className="my-10">
        <img src='/images/break.png' alt='' />
      </div>

      <div className="flex space-x-9 items-center ">
     
        <div>
          <p className="text-white font-bold text-[24px] ">Passabi</p>
          <p className="text-white font-[500] text-[18px] text] py-8 ">
          Made for Small Business Owners          </p>

          <p>
          Passabi offers seamless group savings and provide access to no interest loans for individual members that have come together to solve their money challenges. Digitalize rotating savings platform that is seamlessly integrates with commercial bank and fin-tech companies to offers access to secure and easy to use financial services
          </p>

          <div className="mt-6" >
            <button className="bg-white rounded-lg px-5 uppercase py-3 text-black ">See more</button>
          </div>
        </div>
        <div  >
          <img src="/images/service2.png"  alt='' className="" />
        </div>
      </div>
    </section>
  );
};

export default Service;
