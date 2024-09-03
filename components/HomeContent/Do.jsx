import React from "react";
// import { motion, useAnimation } from "framer-motion";

const Do = () => {
  const content = [
    {
      img: "/images/transfer.png",
      name: "Transfer",
      desc: "Need to send money to a friend, family member, or colleague? XremPays money transfer feature is your go-to solution.",
      color: "#FF9227",
      text: "white",
      border: "white",
    },
    {
      img: "/images/withdrawicon.png",
      name: "Withdrawals",
      desc: "Xtrempay allows you to withdraw money conveniently, ensuring that you have access to your funds whenever and wherever you need them.",
      color: "white",
      border: "#FF9227",
    },
    {
      img: "/images/pay.png",
      name: "Payments",
      desc: "Whether you're settling bills, making purchases, or paying for services, Xtrempay simplifies the payment process.",
      color: "white",
      border: "#FF9227",
    },
    {
      img: "/images/group.png",
      name: "Group Savings",
      desc: "Remember, every penny saved is a step closer to your dreams. Start small, be consistent, and witness the compounding effect of financial discipline",
      color: "white",
      border: "#FF9227",
    },
    {
      img: "/images/smiley.png",
      name: "Prize-linked savings ",
      desc: "Embrace the uncommon and prizes rewarding savings account. save as low as N5000 and get a chance to enter weekly draw.",
      color: "white",
      border: "#FF9227",
    },
  ];
  return (
    <section className="bg-[#F3F3F3] mt-20 md:pl-20 py-20 font-Poppins ">
      <div className="md:flex items-center md:pr-20  px-5">
        <div className=" md:w-[60%] ">
          <p className="md:text-[34px] text-[18px] font-[500] ">
          Discover What Xtrempay Can Do for You
          </p>
          <div className="md:justify-end flex w-full">
        <img src="/images/under.png" className="w-28" alt="" />
      </div>

        </div>
      
      </div>
      <div className="  " >
      <div className="mx-auto overflow-x-scroll scrollcont">
        <div className="w-[310%] ">
          <div className="   mb-4  space-x-5 justify-between  s:block flex  text-black border-b-2 sm:border-b-0 w-[100%] md:w-[36%] sm:bg-secondary sm:rounded-lg py-4 px-3 ">
            {content?.map((items, index) => (
              <div
                key={index}
                style={{ background: items?.color, color: items?.text }}
                className={`bg-[${items?.color}] px-5 py-5 md:w-[60%] rounded-lg `}
              >
                <div className="py-7 flex items-center">
                  <img src={items?.img} alt="" className="w-9 h-9" />
                </div>
                <div className="flex  space-x-1 ">
                  <div
                    className="h-[24px] w-[2px]  "
                    style={{ background: items?.border }}
                  ></div>
                  <p className="font-bold ">{items?.name}</p>
                </div>

                <p className={`font-[400] text-sm md:text-[16px] ${index === 0 ? 'text-white' : 'text-gray-600'}  my-2`}>{items?.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    
    </section>
  );
};

export default Do;
