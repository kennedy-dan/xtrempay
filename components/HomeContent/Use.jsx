import React from "react";

const Use = () => {
  return (
    <section className="md:px-20 px-5 pt-28 font-Poppins">
      <div className="md:flex justify-between">
        <div className="md:w-1/2">
          <p className="font-bold md:text-[50px] text-[30px]">
            Why you must use <br className='md:block hidden'  /> Xtempay
          </p>
          <div className="w-[40%]">
            <img src="/images/props.png" className="w-fit" alt="" />
          </div>
          <div className="mt-6" >
            <img src="/images/play.png"  alt='' />
          </div>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6 md:w-[60%]">
          <div>
            <p className="font-bold text-[43px]">01</p>

            <p className="font-semibold text-[20px] py-4">Secure Gateway</p>

            <p className="text-[13px]">
              Your journey begins with a fortress of security. Our
              state-of-the-art encryption technology ensures that your data is
              shielded from prying eyes. Feel the confidence as you pass through
              the secure gateway, knowing that your financial well-being is our
              top priority.
            </p>
          </div>
          <div>
            <p className="font-bold text-[43px]">02</p>

            <p className="font-semibold text-[20px] py-4">
              Supercharged Transactions
            </p>

            <p className="text-[13px]">
              Meet your savings sidekick – a robust suite of tools designed to
              help you achieve your financial goals. Set up savings goals, track
              your progress, and receive personalized tips on optimizing your
              budget.
            </p>
          </div>{" "}
          <div>
            <p className="font-bold text-[43px]">03</p>

            <p className="font-semibold text-[20px] py-4">Savings Sidekick</p>

            <p className="text-[13px]">
              Meet your savings sidekick – a robust suite of tools designed to
              help you achieve your financial goals. Set up savings goals, track
              your progress, and receive personalized tips on optimizing your
              budget.{" "}
            </p>
          </div>{" "}
          <div>
            <p className="font-bold text-[43px]">04</p>

            <p className="font-semibold text-[20px] py-4">Guardian Alerts</p>

            <p className="text-[13px]">
              Rest easy with our guardian alerts that keep you informed and
              protected. Receive real-time notifications for account activity,
              unusual transactions, or impending due dates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Use;
