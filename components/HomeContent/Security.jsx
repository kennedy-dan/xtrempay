import React from "react";

const Security = () => {
  const seData = [
    {
      msg: "Secure Authentication: Your Digital Identity Shield",
      img: "/images/secure.png",
    },
    {
      msg: "Encrypted Communication: Safeguarding Your Transactions",
      img: "/images/guard.png",
    },
    {
      msg: "Secure Authentication: Your Digital Identity Shield",
      img: "/images/shield.png",
    },
    {
      msg: "Transaction Integrity: Verifying Every Financial Move",
      img: "/images/transact.png",
    },
    {
      msg: "Data Residency and Compliance: Meeting Global Standards",
      img: "/images/data.png",
    },
  ];
  return (
    <div className="md:flex md:px-20 px-5 pt-20 font-Poppins">
      <div>
        <p className="font-bold mb-1 text-[24px] " >END-TO-END SECURITY</p>
        <p className='md:py-0 py-4' >
          At Xtrempay, we understand that your financial well-being is not just
          a matter of numbers; it's a matter of trust. That's why we've
          meticulously crafted an end-to-end security framework, ensuring that
          your financial data is safeguarded at every stage of your journey.
        </p>

        <div>
          {seData?.map((info, index) => (
            <div key={index} className="" >
              <div className="flex mt-5 space-x-3 items-center">
                <div>
                  {" "}
                  <img alt="" className="w-8" src={info?.img} />{" "}
                </div>
                <div>{info?.msg}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Security;
