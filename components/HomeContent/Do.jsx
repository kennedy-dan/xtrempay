import React from "react";

const Do = () => {
  const content = [
    {
      img: "/images/transfer.png",
      name: "Transfer",
      desc: "Need to send money to a friend, family member, or colleague? XremPays money transfer feature is your go-to solution.",
      color: "#FF9227",
      text: 'white',
      border: 'white'


    },
    {
      img: "/images/withdrawicon.png",
      name: "Withdrawals",
      desc: "Xtrempay allows you to withdraw money conveniently, ensuring that you have access to your funds whenever and wherever you need them.",
      color: "white",
      border: '#FF9227'

    },
    {
      img: "/images/pay.png",
      name: "Payments",
      desc: "Whether you're settling bills, making purchases, or paying for services, Xtrempay simplifies the payment process.",
      color: "white",
      border: '#FF9227'

    },
    {
      img: "/images/group.png",
      name: "Group Savings",
      desc: "Remember, every penny saved is a step closer to your dreams. Start small, be consistent, and witness the compounding effect of financial discipline",
      color: "white",
      border: '#FF9227'

    },
    {
      img: "/images/smiley.png",
      name: "Prize-linked savings ",
      desc: "Embrace the uncommon and prizes rewarding savings account. save as low as N5000 and get a chance to enter weekly draw.",
      color: "white",
      border: '#FF9227'

    },
  ];
  return (
    <section className="bg-[#F3F3F3] mt-20 md:px-20 px-5 py-20 font-Poppins ">
      <div className="md:flex items-center ">
        <div className=" md:w-1/2 ">
          <p className="md:text-[37px] text-[24px] font-bold ">
            What can you do with
            <br /> Xtrempay
          </p>
        </div>
        <div className=" md:w-[60%] ">
          <p className="font-[400] text-[13px]">
            Do not worry, we are here to make you smile.By offering you reliable
            financial service such as cash withdrawal, Money transfer, Bill
            payment, Airtime top up, Account opening and loan support.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1  gap-4 mt-10">
        {content?.map((items, index) => (
          <div
          key={index}
            style={{ background: items?.color, color: items?.text }}
            className={`bg-[${items?.color}] px-5 py-5 rounded-lg `}
          >
            <div className="py-7 flex items-center" >
                <img src={items?.img}  alt='' className='w-9 h-9' />
            </div>
            <div className="flex  space-x-1 " >
            <div className='h-[24px] w-[2px]  ' style={{background: items?.border}} ></div>
            <p className="font-bold " >{items?.name}</p>

            </div>

            <p className="font-[400] text-sm my-2" >{items?.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Do;
