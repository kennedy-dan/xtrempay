import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section>
      <div className="md:px-20 bg-[url('/images/herobg.png')] px-4 md:pt-24 pt-40 pb-10 font-Poppins">
        <div className="md:flex md:items-center ">
          <div className="md:w-[45%]">
            <p className="md:text-[51px] text-[34px] font-bold md:leading-[88px]">
              Do More with
              <br className="md:block hidden" /> Xtrem
              <span className="text-primary">pay</span>
            </p>

            <p className="md:text-[14px] text-[13px] font-[400] md:w-[80%] text-justify leading-[27px] md:mt-4 mt-2">
              Explore the uncommon possibilities of digital banking ! Empower
              yourself with lightning fast transactions , whether its
              transferring funds , paying bills and lot more 
            </p>

            <button className="bg-primary  space-x-2 mt-8  px-3 text-sm rounded-lg items-center jus py-4 text-white flex  ">
              <div className="flex items-center space-x-2 ">
                <img className="w-4 " alt="" src="/images/apple.png" />
                <img className="w-4 " alt="" src="/images/store.png" />
              </div>
              <span>DOWNLOAD APP</span>
            </button>
          </div>
          <div className="relative md:w-[55%]">
            <motion.div
              className=""
              initial={{ y: 190, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img src="/images/herohome.png" alt="" />
            </motion.div>
            <div className="absolute top-[60%] right-6 md:right-24">
              <motion.div
                className=""
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <img
                  src="/images/happy.png"
                  alt=""
                  className="md:w-fit md:h-fit w-[200px] h-[76px] object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
