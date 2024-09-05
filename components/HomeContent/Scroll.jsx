import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const ScrollSection = () => {
  const controls = useAnimation();
  const [viewstyle, setViewStyle] = useState("relative");
  const { ref, inView } = useInView({
    threshold: 0.1, // Adjust the threshold as needed
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      setViewStyle("fixed");
    } else {
      setViewStyle("relative");
    }
  }, [inView]);

  return (
    <section className="flex i h-full justify-between font-Poppins md:px-20 px-5  py-24">
      <div className=" h-full  ">
        <div
          //   ref={ref}
          //   animate={controls}
          //   initial={{ position: 'relative', top: 'auto' }}
          className={`bg- sticky  top-20  p-5 `}
        >
          <h2 className="md:text-2xl text-[17px] font-bold text-gray-600 mb-4">Quick Glimpse</h2>
          <p className="md:text-lg text-[13px] font-[500]">Tracking your Saving Progress</p>
          <p className="md:text-[14px] text-[12px] font-[400] mt-1 ">
            You have visibility of your savings balance, transactions and prizes
            in one place
          </p>
         
          {/* Repeat the content as needed */}
        </div>
        <div className="md:h-[300vh] h-[50vh] "></div>
      </div>
      <div className="space-y-7 ">
        <div className="flex justify-end items-center">
          <div>
            <img src="/images/quick1.png" alt="Phone 1" className="" />

            <p className="text-center md:text-[14px] text-[12px] mt-1">
              Xtrempay for Business & Personal Account
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div>
            <img src="/images/quick2.png" alt="Phone 2" className="" />

            <p className="text-center mt-1 md:text-[14px] text-[12px]">Moola</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img src="/images/quick3.png" alt="Phone 2" className="" />

          <p className="text-center mt-1 md:text-[14px] text-[12px]">Fixed Savings balance</p>
        </div>
        {/* Add more images as needed */}
      </div>
    </section>
  );
};

export default ScrollSection;
