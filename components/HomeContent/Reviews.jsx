import { Carousel as PrimeCarousel } from "primereact/carousel";
import React from "react";
import Image from "next/image";
const Reviews = () => {
  const reviewData = [
    {
      img: "/images/slide1.png",
      name: "Tobi",
      msg: "“From the moment I downloaded XtremPay, I was impressed by its user-friendly interface”.",
    },
    {
      img: "/images/slide2.png",
      name: "Omobolanle",
      msg: "“From the moment I downloaded XtremPay, I was impressed by its user-friendly interface”.",
    },
    {
      img: "/images/slide3.png",
      name: "Gbenga",
      msg: "“From the moment I downloaded XtremPay, I was impressed by its user-friendly interface”.",
    },
  ];

  const responsiveOptions = [
    {
      breakpoint: "1400px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  // const productTemplateOthers = (reviewDatas, index) => {
  //   return (
  //     <div className="flex ">
  //       <div  className="w-1/2">
  //         <img className='h-full object-cover'  alt='' src={reviewDatas?.img} />
  //       </div>
  //       <div className="bg-blue-700 w-1/2 md:px-6 px-2 py-2 flex items-center text-white">{reviewDatas?.msg}</div>
  //     </div>
  //   );
  // };

  const productTemplateOthers = (reviewDatas, index) => {
    return (
      <div className="  relative  border-round mr-4  bg-[#FFEAD4] mt-9  text-center py-5 px-16 ">
        <div className='flex justify-center' >
        <img
          src={reviewDatas.img}
          // width={500}
          // height={500}
          alt=""
          className='object-contain'
          // className="h-[400px] w-[400px] rounded-full shadow object-cover "
        />
        </div>
     
        <div className="absolute top-[5%] right-[10%] z-1 ">
          {/* <CiHeart className="w-8 h-8 text-white" /> */}
        </div>
        <p className="font-bold text-[14px] text-center text-gray-500 mt-6">
          {reviewDatas?.msg}
        </p>
        <p className="text-gray-400 text-xl text-left mt-2">
          {/* {frameItems?.desc} */}
        </p>
      </div>
    );
  };

  return (
    <>
      <div className="relative md:px-20 px-0 font-Poppins pt-32 ">
        <p className="text-center md:text-[32px] text-[18px] font-bold mb-3 ">
          Here is what our customers think
        </p>
        <div>
          <PrimeCarousel
            value={reviewData}
            numVisible={1}
            numScroll={1}
            responsiveOptions={responsiveOptions}
            itemTemplate={productTemplateOthers}
            // page={currentPage}
            // onPageChange={(e) => setCurrentPage(e.page)}
          />
        </div>
      </div>

      <img src="/images/bannerbg.png" alt="" className="mt-32" />
    </>
  );
};

export default Reviews;
