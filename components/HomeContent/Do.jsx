import React, {useState} from "react";
// import { motion, useAnimation } from "framer-motion";

const Do = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const content = [
    {
      img: "/images/doo.svg",
      name: "Transfer",
      desc: "Need to send money to a friend, family member, or colleague? Xtrempay money transfer feature is your go-to solution.",
      color: "white",
      // text: "white",
      border: "#FF9227",
      border1: "white",
      imghover: '/images/do.svg'


    },
    {
      img: "/images/withdrawicon.png",
      name: "Withdrawals",
      desc: "Xtrempay allows you to withdraw money conveniently, ensuring that you have access to your funds whenever and wherever you need them.",
      color: "white",
      border: "#FF9227",
      border1: "white",

      imghover: '/images/do2.svg'
    },
    {
      img: "/images/pay.png",
      name: "Payments",
      desc: "Whether you're settling bills, making purchases, or paying for services, Xtrempay simplifies the payment process.",
      color: "white",
      border: "#FF9227",
      border1: "white",

      imghover: '/images/do1.svg'

    },
    {
      img: "/images/group.png",
      name: "Group Savings",
      desc: "Remember, every penny saved is a step closer to your dreams. Start small, be consistent, and witness the compounding effect of financial discipline",
      color: "white",
      border: "#FF9227",
      border1: "white",

      imghover: '/images/do3.svg'

    },
    {
      img: "/images/smiley.png",
      name: "Prize-linked savings ",
      desc: "Embrace the uncommon and prizes rewarding savings account. save as low as N5000 and get a chance to enter weekly draw.",
      color: "white",
      border: "#FF9227",
      border1: "white",

      imghover: '/images/do4.svg'

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
      <div className="  ">
        <div className="mx-auto overflow-x-scroll scrollcont">
          <div className="w-[310%] ">
            <div className="   mb-4  space-x-5 justify-between  s:block flex  text-black border-b-2 sm:border-b-0 w-[100%] md:w-[36%] sm:bg-secondary sm:rounded-lg py-4 px-3 ">
              {content?.map((items, index) => (
                <div
                  key={index}
                  className={`md:px-5 px-2 py-5 w-[80%] cursor-pointer md:w-[60%] rounded-lg 
  ${items?.color === "#FF9227" ? "bg-[#FF9227]" : "bg-white"} 
  hover:bg-primary text-${items?.text} ${
                    index === 0 ? "text-gray-600" : "text-gray-600"
                  } hover:text-white`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}

                >
                  <div className="py-7 flex items-center">
                    <img src={hoveredIndex === index && items?.imghover ? items?.imghover : items?.img} alt="" className="w-9 h-9" />
                  </div>
                  <div className="flex  space-x-1 ">
                    <div
                      className="h-[24px] w-[2px]  "
                      style={{ background: hoveredIndex === index && items?.border1 ? items?.border1 : items?.border }}
                    ></div>
                    <p className="font-bold ">{items?.name}</p>
                  </div>

                  <p
                    className={`font-[400] text-[11px] hover:text-white  md:text-[16px] hyphens-auto leading-tight  my-2`}
                  >
                    {items?.desc}
                  </p>
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
