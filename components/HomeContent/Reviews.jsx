import { Carousel as PrimeCarousel } from "primereact/carousel";
import React from "react";

const Reviews = () => {
  const reviewData = [
    {
      img: "/images/rev.png",
      name: "Sam Dan",
      msg: "“From the moment I downloaded XtremPay, I was impressed by its user-friendly interface. Setting up my account was a breeze, and I was quickly navigating through its features with ease. The simplicity of the app, coupled with its powerful functionalities, has made managing my money more convenient than ever”.",
    },
    {
      img: "/images/rev.png",
      name: "Sam Dan",
      msg: "“From the moment I downloaded XtremPay, I was impressed by its user-friendly interface. Setting up my account was a breeze, and I was quickly navigating through its features with ease. The simplicity of the app, coupled with its powerful functionalities, has made managing my money more convenient than ever”.",
    },
    {
      img: "/images/rev.png",
      name: "Sam Dan",
      msg: "“From the moment I downloaded XtremPay, I was impressed by its user-friendly interface. Setting up my account was a breeze, and I was quickly navigating through its features with ease. The simplicity of the app, coupled with its powerful functionalities, has made managing my money more convenient than ever”.",
    },
  ];

  const responsiveOptions = [
    {
      breakpoint: "3000px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "2000px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "1400px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const productTemplateOthers = (reviewDatas, index) => {
    return (
      <div className="flex ">
        <div  className="w-1/2">
          <img className='h-full object-cover'  alt='' src={reviewDatas?.img} />
        </div>
        <div className="bg-blue-700 w-1/2 md:px-6 px-2 py-2 flex items-center text-white">{reviewDatas?.msg}</div>
      </div>
    );
  };

  return (
    <>
        <div className="relative md:px-20 px-0 font-Poppins pt-32 ">
      <p  className='text-center md:text-[32px] text-[24px] font-bold mb-3 '>Here is what our customers think</p>
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


    <img src='/images/bannerbg.png' alt='' className="mt-32" />
    </>

  );
};

export default Reviews;
